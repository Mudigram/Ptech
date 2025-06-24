'use client';

import { useState } from 'react';

type Props = {
    id: number;
    name: string;
    role: string;
    feedback?: string;
    feedbackValue: string;
    onFeedbackChange: (val: string) => void;
    onSubmit: () => void;
};

export default function FeedbackCard({
    name,
    role,
    feedback,
    feedbackValue,
    onFeedbackChange,
    onSubmit,
}: Props) {
    const [isCreating, setIsCreating] = useState(false);
    const [week, setWeek] = useState('');
    const [taskLink, setTaskLink] = useState('');
    const [rating, setRating] = useState(0);

    const renderStars = () => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white p-4 rounded shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
                {name} <span className="text-sm text-gray-500">({role})</span>
            </h2>

            {feedback ? (
                <p className="mt-2 text-green-500">✅ Feedback: {feedback}</p>
            ) : isCreating ? (
                <>
                    {/* Week Selector */}
                    <label className="block mt-3 text-sm text-gray-700 font-medium">
                        Week
                        <select
                            value={week}
                            onChange={(e) => setWeek(e.target.value)}
                            className="mt-1 w-full border border-gray-200 p-2 rounded text-black"
                        >
                            <option value="">Select Week</option>
                            <option value="Week 1">Week 1</option>
                            <option value="Week 2">Week 2</option>
                            <option value="Week 3">Week 3</option>
                            <option value="Week 4">Week 4</option>
                        </select>
                    </label>

                    {/* Uploaded Task Link */}
                    <label className="block mt-3 text-sm text-gray-700 font-medium">
                        Task Link
                        <input
                            type="url"
                            placeholder="https://link-to-evidence.com"
                            value={taskLink}
                            onChange={(e) => setTaskLink(e.target.value)}
                            className="mt-1 w-full border border-gray-200 p-2 rounded text-black"
                        />
                    </label>

                    {/* Comment Box */}
                    <label className="block mt-3 text-sm text-gray-700 font-medium">
                        Feedback
                        <textarea
                            rows={3}
                            className="mt-1 w-full border border-gray-200 p-2 rounded text-black"
                            placeholder="Write your feedback here..."
                            value={feedbackValue}
                            onChange={(e) => onFeedbackChange(e.target.value)}
                        />
                    </label>

                    {/* Rating Stars */}
                    <label className="block mt-3 text-sm text-gray-700 font-medium">
                        Rating
                        {renderStars()}
                    </label>

                    <button
                        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                        onClick={onSubmit}
                    >
                        Submit Feedback
                    </button>
                </>
            ) : (
                <button
                    className="mt-2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                    onClick={() => setIsCreating(true)}
                >
                    + Create Feedback
                </button>
            )}
        </div>
    );
}
