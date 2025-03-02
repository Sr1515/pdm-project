import Z from 'zod'


export const loginSchema = Z.object({
    email: Z
        .string()
        .email("Formato de e-mail inválido")
        .nonempty("Email é obrigatório"),

    password: Z
        .string()
        .min(6, "A senha deve ter no minimo 6 caracteres")
        .nonempty("A senha é obrigatória")
});