import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Product, User, Shop } from "@prisma/client";
import prisma from "lib/prisma";
import Container from "../Container";

import ProductItem from "app/ProductItem";

export const revalidate = 60; // revalidate every minute

export async function generateStaticParams() {
  const shop = await prisma.shop.findMany();

  return shop.map((s) => ({
    slug: s.slug,
  }));
}

async function getStore({ slug }: { slug: string }) {
  console.log("Slug: " + slug);

  const res = await prisma.shop.findUnique({
    where: {
      slug: slug,
    },
    include: {
      Products: true,
    },
  });

  // Recommendation: handle errors
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data in function getStore");
  }

  return res;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getStore({ slug: params.slug });

  return (
    <>
      {data ? (
        <div>
          {data.heroImg && (
            <Image
              src={data.heroImg}
              alt={data.name}
              width={1920}
              height={1080}
              className="object-cover h-64"
            />
          )}
          <Container className="pb-48">
            <div>
              <div className="flex items-center pt-8 gap-4">
                {data.image && (
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={1920}
                    height={1080}
                    className="object-cover h-24 w-24 rounded-full"
                  />
                )}
                <div className="flex flex-col">
                  <h1 className="text-4xl font-semibold ">{data.name}</h1>
                  <p className="">
                    {data?.bio} - Slug: {params.slug}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20">
              {data.Products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
            <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre>

            <pre className="pt-16">{JSON.stringify(params.slug, null, 2)}</pre>
          </Container>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-semibold">No data found</h1>
        </div>
      )}
    </>
  );
}
