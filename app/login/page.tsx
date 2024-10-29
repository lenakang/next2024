"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleForm } from "./actions";
import { useActionState } from "react";

export default function Home() {
  const [state, action] = useActionState(handleForm, null as any);

  return (
    <main>
      <form action={action}>
        <Input placeholder="password" name="password" />
        <Button text="submit" />
      </form>
    </main>
  );
}
