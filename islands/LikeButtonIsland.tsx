import { useSignal } from "@preact/signals";
import Icon from "deco-sites/decocampstudy/components/ui/Icon.tsx";
import { invoke } from "deco-sites/decocampstudy/runtime.ts";
import { total } from "deco-sites/decocampstudy/sdk/useTotalLikes.ts";
import { useEffect, useId } from "preact/hooks";
import { SendEventOnClick } from "deco-sites/decocampstudy/components/Analytics.tsx";
import { Bounce, toast, ToastContainer } from "react-toastify";


export interface LikeButtonIslandProps {
  productID: string;
}

function LikeButtonIsland({ productID }: LikeButtonIslandProps) {
  const selected = useSignal(false);
  const quantity = useSignal(0);
  const id = useId();
  const Toast = ToastContainer as any;
  
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
    toast.success("👍 Curtiu meeeeeu!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      id={id}
      class="absolute left-0 top-2"
      onClick={(e) => handleToggleLike(e)}
    >
      <SendEventOnClick
        id={id}
        event={{
          // @ts-ignore:
          name: "post_score",
          params: {
            // @ts-ignore:
            score: quantity.value + 1,
            level: 5,
            character: String(productID),
          },
        }}
      />
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
      <Toast />
    </button>
  );
}

export default LikeButtonIsland;
