import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { HorizontalProductCard } from "$components/product/HorizontalProductCard.tsx";
import type { SectionProps } from "deco/types.ts";
import { ProductCardFlagProps } from "deco-sites/decocampstudy/flags/multivariate.ts";

export interface HorizontalProductSectionProps {
  products: ProductCardFlagProps | null;
  layout:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
  animateImage?: boolean;
}

const HorizontalProductSection = ({
  products,
  layout = "max-w-6xl",
  animateImage
}: SectionProps<typeof loader>) => {
  if (!products?.length) return null;

  return (
    <div
      class={`flex items-center justify-center gap-x-4 flex-wrap mx-auto my-2 ${layout}`}
    >
      {products.map((product) => (
        <HorizontalProductCard
          product={product}
          animateImage={animateImage}
        />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  return (
    <div class="skeleton shrink-0 w-full h-[190px] m-2 max-w-[1366px] mx-auto" />
  );
}

export const loader = (props: HorizontalProductSectionProps) => {
  // this code force error - ErrorFallback
  // throw new Error("Not implemented");

  return props;
};

export function ErrorFallback({ error: _error }: { error?: Error }) {
  return (
    <div class="max-w-[1366px] relative my-2 mx-auto">
      <Image
        src="https://fastly.picsum.photos/id/805/1366/190.jpg?hmac=IOEu-O9wreADnVDgYxTsACpP4N9z2KGTTr2c9UE9wAU"
        alt="Go to the culture page"
        height={1366}
        width={190}
        class="object-cover w-full h-[190px]"
      />
      <a
        href="/culturas"
        class="text-white bg-black p-2 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Para saber mais
      </a>
    </div>
  );
}

export default HorizontalProductSection;
