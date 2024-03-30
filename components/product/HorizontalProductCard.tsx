import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "$sdk/format.ts";
import { useOffer } from "$sdk/useOffer.ts";

interface HorizontalProductCardProps {
  product: Product;
}

export const HorizontalProductCard = ({
  product,
}: HorizontalProductCardProps) => {
  const { productID, name, url, offers, isVariantOf, image: images } = product;

  const description = product.description || isVariantOf?.description;
  const { listPrice, price, seller } = useOffer(offers);

  const eventParams = {
    items: [{ item_url: url, quantity: 1, item_name: name! }],
  };

  const [image] = images ?? [];

  return (
    <div class="flex items-center">
      {image.url && (
        <Image
          src={image.url}
          width={175}
          height={115}
          loading="lazy"
          alt={name}
        />
      )}
      <div class="ml-2 flex flex-col">
        <h2>{name}</h2>
        <p class="min-h-[33px] text-normal leading-4 line-clamp-2 overflow-hidden">{description}</p>
        {listPrice && <p class="line-through">{formatPrice(listPrice, offers?.priceCurrency)}</p>}
        {price && <p>{formatPrice(price, offers?.priceCurrency)}</p>}
        {price && (
          <AddToCartButtonVTEX
            eventParams={eventParams}
            productID={productID}
            seller={seller ?? "1"}
          />
        )}
      </div>
    </div>
  );
};