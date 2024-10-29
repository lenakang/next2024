"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleForm } from "./actions";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, action] = useActionState(handleForm, null as any);

  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">안녕하세요!</h1>
        <h2 className="text-md">이메일 또는 소셜 아이디로 로그인해주세요.</h2>
      </div>
      <form action={action} className="w-full flex flex-col gap-2">
        <Input placeholder="이름" type="text" name="name" />
        <Input placeholder="이메일" type="email" name="email" />
        <Input placeholder="비밀번호" type="password" name="password" />
        <Input
          placeholder="비밀번호 확인"
          type="passwordConfirm"
          name="passwordConfirm"
        />
        <Button text="회원가입" size="lg" />
      </form>
    </div>
  );
}
