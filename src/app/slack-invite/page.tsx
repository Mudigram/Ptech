'use client';

import { useState } from 'react';
import TextInput from '@/components/TextInput';

export default function SlackInvitePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inviteSent, setInviteSent] = useState(false);
    const [joinedSlack, setJoinedSlack] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || name.length < 2) {
            alert('Please enter a valid name (at least 2 characters)');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        console.log(`Slack Invite for ${name}: Sent=${inviteSent}, Joined=${joinedSlack}`);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Slack Invite Tracker</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextInput
                        label="Intern Name"
                        value={name}
                        onChange={setName}
                    />

                    <TextInput
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={setEmail}
                    />

                    <div className="flex items-center space-x-3">
                        <input
                            id="inviteSent"
                            type="checkbox"
                            checked={inviteSent}
                            onChange={(e) => setInviteSent(e.target.checked)}
                            className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="inviteSent" className="text-gray-700">Slack Invite Sent?</label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            id="joinedSlack"
                            type="checkbox"
                            checked={joinedSlack}
                            onChange={(e) => setJoinedSlack(e.target.checked)}
                            className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="joinedSlack" className="text-gray-700">Slack Joined?</label>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    >
                        Save Status
                    </button>
                </form>

                {submitted && (
                    <div className="mt-4 text-green-500 font-medium">
                        ✅ Slack status saved!
                    </div>
                )}
            </div>
        </main>
    );
}
