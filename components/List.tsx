import { Check } from "lucide-react";
import { FC } from "react";

interface ListProps {
  data: { id: string | number; content: string }[];
}

const List: FC<ListProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-4">
      {data.map((item) => {
        return (
          <li key={item.id} className="flex items-center gap-5">
            <span className="bg-primary size-5 flex items-center justify-center rounded-full text-card shrink">
              <Check className="size-4" />
            </span>

            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
