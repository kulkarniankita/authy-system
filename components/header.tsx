import { auth, signOut } from '@/auth';
import { cn } from '@/lib/utils';
import NavLink from './nav-link';
import { Button } from './ui/button';

export default async function Header() {
  const session = await auth();

  return (
    <div className="bg-white p-4 border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
          <NavLink href="/" name="Home" />
          {session ? (
            <>
              <NavLink
                href="/dashboard"
                name="Dashboard"
                matchPattern="dashboard"
              />
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <Button
                  type="submit"
                  variant="ghost"
                  className="text-brand-secondary hover:bg-gray-100"
                >
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <NavLink href="/login" name="Login" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'w-2 h-2 rounded-full',
              session ? 'bg-green-700' : 'bg-red-700'
            )}
          ></div>
          <span>{session ? 'Authenticated' : 'Not Authenticated'}</span>
        </div>
      </div>
    </div>
  );
}
