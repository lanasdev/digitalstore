import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);
  return (
    <div>
      <h1>
        This page is protected by NextAuth.js and is only visible to signed in
      </h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
