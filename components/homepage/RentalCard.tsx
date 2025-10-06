import { Card, CardContent } from "@/components/ui/card";
import Headline from "../core/Headline";
import { Button } from "../ui/button";
import Link from "next/link";

interface RentalCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  href: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  title,
  price,
  description,
  imageUrl,
  href,
}) => {
  return (
    <Card className="overflow-hidden rounded-md relative border-0 shadow">
      <div className="absolute size-full left-0 top-0">
        <div
          className="absolute left-0 right-0 top-0 bottom-0"
          style={{
            background: `url("${imageUrl}")`,
          }}
        ></div>

        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/50"></div>
      </div>

      <CardContent className="flex flex-col items-center relative text-card">
        <div className="text-4xl mb-4">{price}</div>

        <Headline as="h3" className="mb-4">
          {title}
        </Headline>

        <p>{description}</p>

        <Link href={href}>
          <Button className="rounded-full hover:bg-card hover:text-foreground mt-12">
            Learn more
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RentalCard;
