'use client';

import { useState } from 'react';
import TextInput from '@/components/TextInput';

export default function SlackInvitePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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

        console.log(`Sending Slack invite to ${name} at ${email}`);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Slack Invite Form</h1>

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

                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    >
                        Send Invite
                    </button>
                </form>

                {submitted && (
                    <div className="mt-4 text-green-500 font-medium">
                        ✅ Slack invite sent successfully!
                    </div>
                )}
            </div>
        </main>
    );
}
