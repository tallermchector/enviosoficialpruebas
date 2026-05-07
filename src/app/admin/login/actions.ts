// src/app/admin/login/actions.ts
'use server';

import { cookies } from 'next/headers';

const loginSchema = {
  username: "",
  password: "",
};


export interface LoginFormState {
  error?: string;
  fieldErrors?: Partial<Record<keyof typeof loginSchema, string[]>>;
  success?: boolean;
}

// Security: Use environment variables instead of hardcoded credentials
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const AUTH_TOKEN = process.env.AUTH_SECRET || 'your-secret-session-token';

export async function login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const username = formData.get('username');
  const password = formData.get('password');

  if (!ADMIN_USER || !ADMIN_PASS) {
      console.error("ADMIN_USER or ADMIN_PASS environment variables are not set.");
      return {
          error: "Error de configuración del servidor."
      }
  }

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return {
          error: "Nombre de usuario o contraseña incorrectos."
      }
  }


  (await
    cookies()).set('admin-auth-token', AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
    sameSite: 'strict',
  });
  
  return { success: true };

}

export async function logout() {
  (await cookies()).delete('admin-auth-token');
}
