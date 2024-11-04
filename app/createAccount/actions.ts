"use server";

import { z } from "zod";

export const handleForm = async (prevState: any, formData: FormData) => {
    await new Promise((res) => setTimeout(res, 300));

    // 순서대로 에러 메세지 나옴
    const schema = z
        .object({
            name: z.string().trim().min(1, "이름을 입력해주세요."),

            email: z
                .string()
                .trim()
                .min(1, "이메일을 입력해주세요.")
                .email("이메일 형식을 확인해주세요."),

            password: z
                .string()
                .trim()
                .min(1, "비밀번호를 입력해주세요.")
                .superRefine((val, ctx) => {
                    if (val.length > 0 && val.length < 4) {
                        ctx.addIssue({
                            code: "custom",
                            message: "최소 4글자 이상 입력해주세요.",
                        });
                    }
                }),

            passwordConfirm: z
                .string()
                .trim()
                .min(1, "비밀번호를 입력해주세요."),
        })
        .superRefine(({ password, passwordConfirm }, ctx) => {
            if (password !== passwordConfirm) {
                ctx.addIssue({
                    code: "custom",
                    path: ["passwordConfirm"],
                    message: "비밀번호를 확인해주세요.",
                });
            }
        });

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        passwordConfirm: formData.get("passwordConfirm"),
    };
    const result = schema.safeParse(data);

    if (!result.success) {
        return result.error.flatten().fieldErrors;
    } else {
        console.log("통과", result.data);
    }
};
