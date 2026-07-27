import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
        .max(80, "Imię jest za długie"),
    phone: z
        .string()
        .regex(/^(\+48)?\s?\d{3}\s?\d{3}\s?\d{3}$/, "Podaj prawidłowy numer telefonu"),
    email: z
        .email("Podaj prawidłowy adres e-mail")
        .optional()
        .or(z.literal("")),
    loc: z.string().optional(),
    message: z
        .string()
        .min(10, "Wiadomość musi mieć co najmniej 10 znaków")
        .max(1000, "Wiadomość jest za długa"),
    consent: z.literal(true, {
        error: "Zgoda na przetwarzanie danych jest wymagana",
    }),
    website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;