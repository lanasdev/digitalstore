import Image from "next/image";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Link from "next/link";

import prisma from "lib/prisma";
// import { Product } from "@prisma/client";
// get the product type from the prisma client
import { Product, Shop } from "@prisma/client";

import ProductItem from "app/ProductItem";
import Container from "./Container";

async function getNewestProducts() {
  const res = await prisma.product.findMany({
    take: 10,
  });
  console.log(res as Product[]);

  // Recommendation: handle errors
  // if (!res) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res;
}

// async function getUserProducts({ userId }) {
//   const res = await prisma.product.findMany({
//     where: {
//       userId,
//     },
//   });

//   // Recommendation: handle errors
//   if (!res) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch user products");
//   }

//   return res;
// }

export default async function Home() {
  const session = await unstable_getServerSession(authOptions);

  const data = await getNewestProducts();

  // TODO: userId is not available on the session object
  let userProducts = [];

  // if (session?.user?.email) {
  //   userProducts = await getUserProducts(session.user.email);
  // }

  return (
    <Container className="pt-24 min-h-screen pb-48">
      <h1 className="text-4xl font-bold  pb-24">
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
          {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        </div>
      ) : (
        <div className="flex gap-4">
          <h2 className=" pb-4">You are not signed in</h2>
          <Link href="/api/auth/signin" className=" hover:uppercase ">
            Sign in
          </Link>
        </div>
      )}

      <div className="pt-16">
        <h2 className="pb-8 text-xl font-semibold">Products from Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-md md:max-w-screen-lg   gap-4">
          {data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
        <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Container>
  );
}
