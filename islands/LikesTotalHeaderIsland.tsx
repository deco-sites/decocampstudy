import Icon from "deco-sites/decocampstudy/components/ui/Icon.tsx";
import { total } from "deco-sites/decocampstudy/sdk/useTotalLikes.ts";

function LikesTotalHeaderIsland() {
  return (
    <div class="hidden lg:flex items-center justify-center gap-1 sm:gap-2 min-w-12 sm:min-w-14">
      <Icon id="Friends" width={24} height={24} />
      <span class="min-w-4 text-center text-xs font-thin">{total.value}</span>
    </div>
  );
}

export default LikesTotalHeaderIsland;
