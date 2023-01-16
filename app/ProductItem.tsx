import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

export default function ProductItem({ product }: { product: any }) {
  return (
    <Link
      href={`${product.creator}/${product.slug}`}
      className="dark:bg-slate-800 group group-hover:cursor-pointer max-w-xs rounded-lg shadow-lg  flex flex-col"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-lg object-cover w-full aspect-square "
      />
      <div className="p-4">
        <h2 className="text-xl group-hover:underline font-bold pt-4">{product.name}</h2>
        <p className="text-slate-500 line-clamp-3 pt-2 dark:text-slate-100">
          {product.description}
        </p>
        <p className="text-slate-500 pt-6 py-2 dark:text-slate-100 hover:text-slate-400">
          Buy ${product.price}
        </p>
      </div>
    </Link>
  )
}
