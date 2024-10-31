import { z } from "zod";

export default function Login() {
  const test = async (formData: any) => {
    "use server";

    const data = {
      id: formData.get("id") || null,
    };

    const schema = z.object({
      id: z.string({ required_error: "필요!" }),
    });

    const result = schema.safeParse(data);

    if (!result.success) {
      console.log(result.error.flatten());
      return;
    }

    console.log("🌼", result.data);
  };
  return (
    <main>
      <form action={test}>
        <input type="text" placeholder="id" name="id" />
        <button>login</button>
      </form>
    </main>
  );
}
