import { useSignal } from "@preact/signals";
import Icon from "deco-sites/decocampstudy/components/ui/Icon.tsx";
import { invoke } from "deco-sites/decocampstudy/runtime.ts";
import { total } from "deco-sites/decocampstudy/sdk/useTotalLikes.ts";
import { useEffect } from "preact/hooks";

export interface LikeButtonIslandProps {
  productID: string;
}

function LikeButtonIsland({ productID }: LikeButtonIslandProps) {
  const selected = useSignal(false);
  const quantity = useSignal(0);

  useEffect(() => {
    const updateTotals = async () => {
      const totalLikes = await invoke["deco-sites/decocampstudy"].loaders
        .totalLikesLoader();
      const totalLikesProduct = await invoke["deco-sites/decocampstudy"].loaders
        .totalLikesProductLoader({ productID });
      total.value = totalLikes.total;
      quantity.value = totalLikesProduct.product;
    };

    updateTotals();
    setInterval(updateTotals, 30000);
  });

  const handleToggleLike = async (e: MouseEvent) => {
    e.preventDefault();
    selected.value = true;

    await invoke["deco-sites/decocampstudy"].actions.sendLikesAction({
      productID: productID,
    });

    const totalLikes = await invoke["deco-sites/decocampstudy"].loaders
      .totalLikesLoader();
    total.value = totalLikes.total;
    const totalLikesProduct = await invoke["deco-sites/decocampstudy"].loaders
      .totalLikesProductLoader({ productID });
    quantity.value = totalLikesProduct.product;
  };

  return (
    <button
      class="absolute left-0 top-2"
      onClick={(e) => handleToggleLike(e)}
    >
      {!selected.value
        ? <Icon id="MoodSmile" width={24} height={24} />
        : <Icon id="MoodCheck" width={24} height={24} />}
      <span
        class={`min-w-4 text-center text-xs font-thin ${
          !selected.value ? "text-gray-500" : "text-secondary"
        }`}
      >
        {quantity.value}
      </span>
    </button>
  );
}

export default LikeButtonIsland;
