import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$components/product/HorizontalProductCard.tsx";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
}

const HorizontalProductSection = ({
  products,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div class="flex items-center justify-center gap-x-4 flex-wrap p-2">
      {products.map((product) => (
        <HorizontalProductCard
          product={product}
        />
      ))}
    </div>
  );
};

export default HorizontalProductSection;
