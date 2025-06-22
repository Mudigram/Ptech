'use client';

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
    return (
        <div className="bg-white p-4 rounded shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
                {name} <span className="text-sm text-gray-500">({role})</span>
            </h2>

            {feedback ? (
                <p className="mt-2 text-green-500">✅ Feedback: {feedback}</p>
            ) : (
                <>
                    <textarea
                        rows={3}
                        className="mt-2 w-full border border-gray-200 p-2 rounded text-black"
                        placeholder="Write your feedback here..."
                        value={feedbackValue}
                        onChange={(e) => onFeedbackChange(e.target.value)}
                    />
                    <button
                        className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                        onClick={onSubmit}
                    >
                        Submit Feedback
                    </button>
                </>
            )}
        </div>
    );
}
