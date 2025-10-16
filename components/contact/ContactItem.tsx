import { FC, ReactNode } from "react";
import Headline from "../core/Headline";

interface ContactItemProps {
  data: {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
  };
}

const ContactItem: FC<ContactItemProps> = ({ data }) => {
  const { title, description, icon } = data;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
      <div className="rounded-full size-[70px] flex items-center justify-center bg-background shadow shrink-0 text-primary">
        {icon}
      </div>

      <div className="text-left">
        <Headline className="text-lg font-bold mb-4">{title}</Headline>

        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
