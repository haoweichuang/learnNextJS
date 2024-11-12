import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FormSchema() {
  return z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(3),
  });
}
