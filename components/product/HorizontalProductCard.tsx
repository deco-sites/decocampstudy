import type { SlimProduct } from "$sdk/toSlimProducts.ts"
import Image from "apps/website/components/Image.tsx"
import AddToCartButtonVTEX from "$islands/AddToCartButton/vtex.tsx"

interface HorizontalProductCardProps {
  slimProduct: SlimProduct
}

export const HorizontalProductCard = ({
  slimProduct,
}: HorizontalProductCardProps) => {
  const {
    productID,
    description,
    imageURL,
    name,
    formatLowPrice,
    formatHighPrice,
    highPrice,
    lowPrice,
    seller,
    url,
  } = slimProduct

  const hasBestPrice = highPrice !== lowPrice
  const price = hasBestPrice
    ? `${formatLowPrice} - ${formatHighPrice}`
    : formatLowPrice

  const eventParams = {
    items: [{ item_url: url, quantity: 1, item_name: name }],
  }

  return (
    <div class="flex items-center">
      {imageURL && (
        <Image
          src={imageURL}
          width={175}
          height={115}
          loading="lazy"
          alt={name}
        />
      )}
      <div class="ml-2 flex flex-col">
        <h2>{name}</h2>
        <p>{description}</p>
        {price && <p>{price}</p>}
        {price && (
          <AddToCartButtonVTEX
            eventParams={eventParams}
            productID={productID}
            seller={seller}
          />
        )}
      </div>
    </div>
  )
}
