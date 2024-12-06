import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        console.log({ credentials });

        if (
          credentials.username === 'admin' &&
          credentials.password === 'admin'
        ) {
          return { id: '1', name: 'Admin' };
        }
        return null;
      },
    }),
  ],
});
