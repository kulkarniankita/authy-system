import { signIn } from '@/auth';

export function LoginForm() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
