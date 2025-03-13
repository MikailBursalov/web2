import { SearchSection } from "@/components/root/SearchSection";
import { SuggestedListings } from "@/components/root/SuggestedListings";
import { PopularADS } from "@/components/root/PopularADS";

export default function Home() {
  return (
    <div>
      <SearchSection />
      <SuggestedListings />
      <PopularADS />
    </div>
  );
}
