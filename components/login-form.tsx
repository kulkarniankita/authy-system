'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const credentialsAction = async (formData: FormData) => {
    const result = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: true,
      callbackUrl: '/',
    });

    if (result?.error) {
      setError('Invalid credentials');
    }
  };

  return (
    <form action={credentialsAction}>
      <label htmlFor="username">
        Username
        <input type="text" id="username" name="username" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" name="password" />
      </label>
      <input type="submit" value="Sign In" />
      {error && <p>{error}</p>}
    </form>
  );
}
