import Image from "next/image";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Link from "next/link";

export default async function Home() {
  const session = await unstable_getServerSession(authOptions);

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold animate-bounce pb-24">
        {session ? `Hello ${session?.user?.name}!` : "Hello World"}
      </h1>
      {session ? (
        <div>
          <h2 className="text-2xl font-bold">You are signed in</h2>
          {session?.user?.image && (
            <Image
              src={session?.user?.image}
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-full object-cover pt-8"
            />
          )}
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold pb-4">You are not signed in</h2>
          <Link href="/api/auth/signin" className="hover:underline ">
            Sign in
          </Link>
        </div>
      )}
    </main>
  );
}
