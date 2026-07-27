'use server'

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(data: ContactFormValues) {
    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false as const, error: "Nieprawidłowe dane formularza" };
    }

    const { name, phone, email, loc, message, website } = parsed.data;

    if (website) {
        return { success: true as const };
    }
    const { error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mikolaj982.hi@gmail.com",
        replyTo: email || undefined,
        subject: `Nowe zapytanie o wycenę od ${name}`,
        text: `Imię i nazwisko: ${name}\nTelefon: ${phone}\nE-mail: ${email || "nie podano"}\nLokalizacja: ${loc || "nie podano"}\n\nZakres prac:\n${message}`,
    });

    if (error) {
        return { success: false as const, error: "Nie udało się wysłać wiadomości" };
    }

    return { success: true as const };
}