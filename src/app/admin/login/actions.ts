'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function login(
  credentials: z.infer<typeof loginSchema>
): Promise<{ success: boolean; error?: string }> {
  const parsedCredentials = loginSchema.safeParse(credentials);

  if (!parsedCredentials.success) {
    return { success: false, error: 'Invalid input' };
  }

  const { username, password } = parsedCredentials.data;

  // IMPORTANT: In a real app, use environment variables for credentials
  const validUsername = process.env.ADMIN_USERNAME || 'Sachin18';
  const validPassword = process.env.ADMIN_PASSWORD || '@Sachin18k';

  if (username === validUsername && password === validPassword) {
    const user = { username };
    const secret = process.env.JWT_SECRET || 'your-super-secret-key';
    const token = sign({ user }, secret, { expiresIn: '1h' });

    cookies().set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    return { success: true };
  }

  return { success: false, error: 'Invalid username or password' };
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) });
}
