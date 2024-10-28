import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  const handleForm = async (formData: FormData) => {
    "use server";
    await new Promise((res) => setTimeout(res, 5000));
    console.log("password :", formData.get("password"));
  };

  return (
    <main>
      <form action={handleForm}>
        <Input placeholder="password" name="password" />
        <Button text="submit" />
      </form>
    </main>
  );
}
