import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

interface InputItemProps {
    id: string;
    label: string;
    value: number | null;
    defaultValue?: number;
    onChange: (value: number | null) => void;
    placeholder?: string;
    unit?: string;
    isFloat?: boolean;
}

export const InputItem: React.FC<InputItemProps> = ({
    id,
    label,
    value,
    defaultValue,
    onChange,
    placeholder,
    unit,
    isFloat = false,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (val === "") {
            onChange(null);
            return;
        }
        const numVal = isFloat ? parseFloat(val) : parseInt(val, 10);
        if (!isNaN(numVal)) {
            onChange(numVal);
        }
    };

    const displayValue = value === null ? (defaultValue !== undefined ? String(defaultValue) : "") : String(value);

    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label} {unit && <span className="text-xs text-gray-500">({unit})</span>}
            </Label>
            <Input
                type="number"
                id={id}
                value={displayValue}
                step={isFloat ? "0.1" : "1"}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-white/80 focus:bg-white"
            />
        </div>
    );
};