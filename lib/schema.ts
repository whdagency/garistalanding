import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string({ required_error: "Message is required" })
    .min(20, { message: "Message must be at least 20 characters long." }),
  company: z
    .string({ required_error: "Company is required" })
    .min(3, { message: "Company must be between 3 and 50 characters long." })
    .max(50, { message: "Company must be between 3 and 50 characters long." }),
  service: z.string().default("Contact Us")
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
