import * as z from 'zod';
export const registerSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6).max(255),
    confirmPass: z.string().min(6).max(255)
})
.refine((data)=> data.password === data.confirmPass,{
    message: "Password không trùng nhau",
    path: ["confirmPass"]
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255)
})
