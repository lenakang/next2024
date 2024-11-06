import { z } from "zod";

export const schema = z
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

        passwordConfirm: z.string().trim().min(1, "비밀번호를 입력해주세요."),
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

export type FormData = z.infer<typeof schema>;

export const handleForm = async (formData: FormData) => {
    await new Promise((res) => setTimeout(res, 300));
    const result = schema.safeParse(formData);

    if (!result.success) {
        return result.error.flatten().fieldErrors;
    } else {
        console.log("통과", result.data);
    }
};
