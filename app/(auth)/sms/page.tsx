"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import smsLogIn from "./actions";
import { useActionState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function SMSLogin() {
    const [state, dispatch] = useActionState(smsLogIn, null);
    return (
        <div className="min-h-screen px-4 py-6">
            <Link
                href="/"
                className="inline-block mb-2 transform -translate-x-1"
            >
                <ChevronLeftIcon className="size-6" />
            </Link>
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-2">안녕하세요!</h1>
                <h2>휴대폰 번호로 로그인해주세요.</h2>
            </div>
            <form action={dispatch} className="flex flex-col gap-2">
                <Input
                    name="phone"
                    type="number"
                    placeholder="휴대폰 번호(-없이 숫자만 입력)"
                    required
                />
                <Button text="인증문자 받기" />
            </form>
        </div>
    );
}
