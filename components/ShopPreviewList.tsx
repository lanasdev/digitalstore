import { Shop } from "@prisma/client";
import StorePreview from "./ShopPreview";

export default function ShopPreviewList({ shops }: { shops: Shop[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {shops.map((shop) => (
        <StorePreview shop={shop} key={shop.slug} />
      ))}
    </div>
  );
}
