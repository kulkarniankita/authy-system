import AuthPanel from '@/components/auth-panel';

import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto w-full max-w-7xl">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-brand-secondary">
              Welcome to Authy!
            </h1>

            <p className="text-brand-secondary/70">
              This is a public page accessible to everyone.
            </p>
          </div>
        </div>
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
