'use client';

type Props = {
    label: string;
    value: string;
    onChange: (val: string) => void;
    type?: string;
    required?: boolean;
    placeholder?: string;
};

export default function TextInput({
    label,
    value,
    onChange,
    type = 'text',
    required = true,
    placeholder,
}: Props) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-200 rounded text-black"
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
}
