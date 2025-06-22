'use client';

type Props = {
    label: string;
    value: string;
    onChange: (val: string) => void;
    options: string[];
    required?: boolean;
};

export default function SelectInput({
    label,
    value,
    onChange,
    options,
    required = true,
}: Props) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-200 rounded bg-white text-black"
                required={required}
            >
                <option value="">Select an option</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
