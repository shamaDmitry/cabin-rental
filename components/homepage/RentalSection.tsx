import { FC } from "react";
import Headline from "@/components/core/Headline";

interface RentalSection {
  className?: string;
}

const RentalSection: FC<RentalSection> = ({ className }) => {
  return (
    <section className="min-h-[320px] py-[140px]">
      <Headline>Cabin Rentals</Headline>
    </section>
  );
};

export default RentalSection;
