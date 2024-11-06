"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { FormData, handleForm, schema } from "./actions";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SocialLogin from "@/components/SocialLogin";

export default function CreateAccount() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

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
                <h2>회원가입 또는 소셜 아이디로 시작해 보세요.</h2>
            </div>
            <form
                onSubmit={handleSubmit(handleForm)}
                className="w-full flex flex-col gap-2"
            >
                <Input
                    placeholder="이름"
                    type="text"
                    {...register("name", {
                        required: true,
                    })}
                    errors={errors?.name?.message}
                />
                <Input
                    placeholder="이메일"
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                    errors={errors?.email?.message}
                />
                <Input
                    placeholder="비밀번호"
                    type="password"
                    {...register("password", {
                        required: true,
                    })}
                    errors={errors?.password?.message}
                />
                <Input
                    placeholder="비밀번호 확인"
                    type="password"
                    {...register("passwordConfirm", {
                        required: true,
                    })}
                    errors={errors?.passwordConfirm?.message}
                />
                <Button text="회원가입" size="lg" />
            </form>
            <SocialLogin />
        </div>
    );
}
