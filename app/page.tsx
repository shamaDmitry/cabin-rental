import AdventureSection from "@/components/homepage/AdventureSection";
import OrderBanner from "@/components/homepage/OrderBanner";
import RentalSection from "@/components/homepage/RentalSection";

export default function Home() {
  return (
    <>
      <OrderBanner />

      <AdventureSection />

      <RentalSection />
    </>
  );
}
