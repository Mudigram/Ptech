'use client';

import { useState } from 'react';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';

export default function LetterGenerationPage() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const query = new URLSearchParams({
            name,
            role,
            department,
        }).toString();

        const letterURL = `https://gen.internal.purplerain.tech/generate?${query}`;

        window.open(letterURL, '_blank');

        setSubmitted(true);
    };


    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Letter Generation</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextInput
                        label="Intern Name"
                        value={name}
                        onChange={setName}
                    />

                    <TextInput
                        label="Role"
                        value={role}
                        onChange={setRole}
                    />

                    <SelectInput
                        label="Department"
                        value={department}
                        onChange={setDepartment}
                        options={['Design', 'Marketing', 'Engineering', 'HR']}
                    />


                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    >
                        Generate Letter
                    </button>
                </form>

                {submitted && (
                    <div className="mt-4 text-green-500 font-medium">
                        ✅ Letter generation triggered successfully!
                    </div>
                )}
            </div>
        </main>
    );
}
