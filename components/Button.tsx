import { useFormStatus } from "react-dom";

interface IButton {
    text: string;
    size?: "sm" | "md" | "lg";
}

export default function Button({ text, size = "md" }: IButton) {
    const textSize =
        size === "sm" ? "text-sm" : size === "lg" ? "h-11 text-lg" : "";

    const { pending } = useFormStatus();

    return (
        <button className={`btn-primary ${textSize}`} disabled={pending}>
            {pending ? "Loading..." : text}
        </button>
    );
}
