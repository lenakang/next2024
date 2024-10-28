"use client";

import { useFormStatus } from "react-dom";

interface IButton {
  text: string;
}

export default function Button({ text }: IButton) {
  const { pending } = useFormStatus();
  return (
    <button className="btn-primary" disabled={pending}>
      {text}
    </button>
  );
}
