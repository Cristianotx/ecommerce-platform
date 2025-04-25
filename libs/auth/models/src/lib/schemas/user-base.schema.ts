import { z } from 'zod';

export const BaseUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });