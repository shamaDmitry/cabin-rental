import { cn } from "@/lib/utils";
import Container from "@/components/core/Container";
import Headline from "@/components/core/Headline";
import { FC } from "react";
import ActivityCard from "./ActivityCard";

interface ActivitiesSectionProps {
  className?: string;
}

const ActivitiesSection: FC<ActivitiesSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("min-h-[320px] py-[140px]", className)}
      style={{
        background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00cfdbe885cb00231936b3?nowebp")`,
      }}
    >
      <Container className="text-center text-card">
        <Headline className="mb-12">Things to Do</Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          <ActivityCard />

          <ActivityCard />

          <ActivityCard />

          <ActivityCard />
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesSection;
