import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$components/product/HorizontalProductCard.tsx";
import { toSlimProducts } from "$sdk/toSlimProducts.ts";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
}

const HorizontalProductSection = ({
  products,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  const slimProducts = toSlimProducts(products);

  return (
    <div class="flex items-center justify-center gap-x-4 flex-wrap">
      {slimProducts.map((product) => (
        <HorizontalProductCard slimProduct={product} />
      ))}
    </div>
  );
};

export default HorizontalProductSection;
