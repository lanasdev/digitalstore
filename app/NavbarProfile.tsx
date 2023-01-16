import Image from "next/image";
// import { unstable_getServerSession } from "next-auth/next";
// import { authOptions } from "pages/api/auth/[...nextauth]";
// import

export default function NavbarProfile() {
  //   const session = await unstable_getServerSession(authOptions);

  return (
    <>
      <span className="sr-only">Open user menu</span>
      {/* {session?.user?.image ? (
        <Image
          className="h-8 w-8 rounded-full"
          width={32}
          height={32}
          src={session?.user?.image}
          alt=""
        />
      ) : (
        <Image
          className="h-8 w-8 rounded-full"
          width={32}
          height={32}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      )} */}
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </>
  );
}
