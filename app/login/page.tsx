"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleForm } from "./actions";
import { useActionState } from "react";

// 1. 버튼 누르면 refresh
// 2. Form의 action으로 소통할 경우 "use server" 필수
// 3. Form의 action으로 소통할 경우 input의 name 설정 필수
// 4-1. Form의 action으로 소통할 경우 반환값은 반드시 void 또는 Promise<void>
// 4-2. 실제 응답을 클라이언트에 보내려면 다른 방법 필요 (useActionState)

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
