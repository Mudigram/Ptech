'use client';

import { useState } from 'react';
import FeedbackCard from '@/components/FeedbackCard';

type Intern = {
    id: number;
    name: string;
    role: string;
    feedback?: string;
};

const initialInterns: Intern[] = [
    { id: 1, name: 'Mudi John', role: 'Frontend Intern' },
    { id: 2, name: 'Sarah Bello', role: 'Marketing Intern' },
    { id: 3, name: 'Chuka Emeka', role: 'Design Intern' },
];

export default function DepartmentFeedbackPage() {
    const [interns, setInterns] = useState<Intern[]>(initialInterns);
    const [feedbacks, setFeedbacks] = useState<Record<number, string>>({});

    const handleFeedbackChange = (id: number, value: string) => {
        setFeedbacks((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (id: number) => {
        setInterns((prev) =>
            prev.map((intern) =>
                intern.id === id ? { ...intern, feedback: feedbacks[id] } : intern
            )
        );
        alert(`Feedback saved for intern ID: ${id}`);
    };

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Department Feedback Panel</h1>

                {interns.map((intern) => (
                    <FeedbackCard
                        key={intern.id}
                        id={intern.id}
                        name={intern.name}
                        role={intern.role}
                        feedback={intern.feedback}
                        feedbackValue={feedbacks[intern.id] || ''}
                        onFeedbackChange={(val) => handleFeedbackChange(intern.id, val)}
                        onSubmit={() => handleSubmit(intern.id)}
                    />
                ))}
            </div>
        </main>
    );
}
