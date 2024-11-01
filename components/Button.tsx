interface IButton {
    text: string;
    size?: "sm" | "md" | "lg";
    pending: boolean;
}

export default function Button({ text, size = "md", pending }: IButton) {
    const textSize =
        size === "sm" ? "text-sm" : size === "lg" ? "h-11 text-lg" : "";

    return (
        <button className={`btn-primary ${textSize}`} disabled={pending}>
            {pending ? "Loading..." : text}
        </button>
    );
}
