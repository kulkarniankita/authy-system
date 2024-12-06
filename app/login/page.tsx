import AuthPanel from '@/components/auth-panel';
import { LoginForm } from '@/components/login-form';

export default async function Login() {
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto w-full max-w-7xl">
        <div className="flex justify-center items-center min-h-96">
          <div className="space-y-4 w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-brand-secondary">Login</h2>
            <p className="text-brand-secondary/70">
              Please login to access your account.
            </p>
            <LoginForm />
          </div>
        </div>
        <AuthPanel />
      </div>
    </div>
  );
}
