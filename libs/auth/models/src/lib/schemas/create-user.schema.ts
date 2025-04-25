import { z } from 'zod';
import { BaseUserSchema } from './user-base.schema';

export const CreateUserSchema = BaseUserSchema.extend({
  password: z.string().min(6),
});

BaseUserSchema.extend({
  password: z.string().min(6),
});

// Tipo inferido automaticamente
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
