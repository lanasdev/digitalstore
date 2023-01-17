import { Shop } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ShopPreview({ shop }: { shop: Shop }) {
  return (
    <Link
      href={`/${shop.slug}`}
      className="flex flex-col group items-center justify-center space-y-4  "
    >
      {shop.image && (
        <Image
          src={shop.image}
          alt={shop.name}
          width={256}
          height={256}
          className="rounded-full w-64 h-64 object-cover group-hover:opacity-50 transition group-hover:filter group-hover:brightness-90"
        />
      )}
      <div>
        <h2 className="text-xl text-center group-hover:underline transition">
          {shop.name}
        </h2>
        <p className="text-gray-500">{shop.bio}</p>
      </div>
    </Link>
  );
}
