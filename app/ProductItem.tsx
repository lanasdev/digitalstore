import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

import { Product } from "@prisma/client";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`/${product.slug}`}
      className="bg-slate-600 group group-hover:cursor-pointer max-w-xs rounded-lg shadow-lg  flex flex-col"
    >
      <Image
        src={product.image as string}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-t-lg object-cover w-full aspect-square "
      />
      <div className="p-4">
        <h3 className="text-xl text-slate-100 group-hover:underline font-bold pt-4">
          {product.name}
        </h3>
        <p className=" line-clamp-3 pt-2 text-slate-200">
          {product.description}
        </p>
        <p className="text-slate-500 pt-6 py-2 dark:text-slate-100 hover:text-slate-400">
          Buy{" "}
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </Link>
  );
}
