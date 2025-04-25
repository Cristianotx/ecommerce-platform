import { z } from 'zod';
import { BaseUserSchema } from './user-base.schema';

export const UpdateUserSchema = BaseUserSchema.extend({
  password: z.string().min(6),
});

// Tipo inferido automaticamente
export type UpdatedUserDto = z.infer<typeof UpdateUserSchema>;
