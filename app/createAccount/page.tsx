"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleForm } from "./actions";
import { useActionState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

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
                <h2>회원가입 또는 소셜 아이디로 로그인 해주세요.</h2>
            </div>
            <form className="w-full flex flex-col gap-2">
                <Input
                    placeholder="이름"
                    type="text"
                    {...register("name", {
                        required: true,
                    })}
                    errors={errors?.name}
                />
                <Input
                    placeholder="이메일"
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                    errors={errors?.email}
                />
                <Input
                    placeholder="비밀번호"
                    type="password"
                    {...register("password", {
                        required: true,
                    })}
                    errors={errors?.password}
                />
                <Input
                    placeholder="비밀번호 확인"
                    type="password"
                    {...register("passwordConfirm", {
                        required: true,
                    })}
                    errors={errors?.passwordConfirm}
                />
                <Button text="회원가입" size="lg" pending={pending} />
            </form>
        </div>
    );
}
