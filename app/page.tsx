"use client";

export default function Home() {
  const getFn = async () => {
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        name: "Jane",
        password: "1234",
      }),
    });
    console.log(await res.json());
  };

  return (
    <main>
      <form action="">
        <input type="text" />
        <button>submit</button>
        <span onClick={getFn}>onclick</span>
      </form>
    </main>
  );
}
