import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "$sdk/format.ts";
import { useOffer } from "$sdk/useOffer.ts";
import { clx } from "$sdk/clx.ts";
import LikeButtonIsland from "$islands/LikeButtonIsland.tsx";

interface HorizontalProductCardProps {
  product: Product;
  animateImage?: boolean;
}

export const HorizontalProductCard = ({
  product,
  animateImage,
}: HorizontalProductCardProps) => {
  const { productID, name, url, offers, isVariantOf, image: images } = product;

  const description = product.description || isVariantOf?.description;
  const { listPrice, price, seller } = useOffer(offers);

  const eventParams = {
    items: [{ item_url: url, quantity: 1, item_name: name! }],
  };

  const [image] = images ?? [];

  return (
    <div class="flex items-center relative">
      <div class="aspect-square h-full overflow-hidden">
        {image.url && (
          <Image
            src={image.url}
            width={175}
            height={175}
            loading="lazy"
            alt={name}
            class={clx(`max-w-[175px] max-h-[175px] ${animateImage && "hover:scale-110 duration-300"}`)}
          />
        )}
      </div>

      <div class="ml-2 flex flex-col">
        <h2>{name}</h2>
        <p class="min-h-[33px] text-normal leading-4 line-clamp-2 overflow-hidden">
          {description}
        </p>
        {listPrice && (
          <p class="line-through">
            {formatPrice(listPrice, offers?.priceCurrency)}
          </p>
        )}
        {price && <p>{formatPrice(price, offers?.priceCurrency)}</p>}
        {price && (
          <AddToCartButtonVTEX
            eventParams={eventParams}
            productID={productID}
            seller={seller ?? "1"}
          />
        )}
      </div>

      <LikeButtonIsland productID={productID} />
    </div>
  );
};
