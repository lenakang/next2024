export default function Home() {
  const handleForm = async (formData: FormData) => {
    "use server";
    console.log("password :", formData.get("password"));
  };
  return (
    <main>
      <form action={handleForm}>
        <input type="text" placeholder="password" name="password" />
        <button>submit</button>
      </form>
    </main>
  );
}
