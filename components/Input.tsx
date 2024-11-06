"use client";

import { InputHTMLAttributes } from "react";

interface InputProps {
    name: string;
    errors?: string;
}

export default function Input({
    name,
    errors = "",
    ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <input
                name={name}
                className="bg-transparent rounded-md w-full h-10 focus:outline-none transition ring-neutral-200 focus:ring-black placeholder:text-neutral-400 px-2 border border-gray focus:border-black"
                {...rest}
            />

            <span className="text-red-500 font-medium text-sm">{errors}</span>
        </div>
    );
}
