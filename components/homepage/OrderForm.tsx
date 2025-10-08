"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface OrderFormProps {
  className?: string;
}

const OrderForm: FC<OrderFormProps> = ({ className }) => {
  return (
    <form className={className}>
      <div>
        <Input className="" placeholder="Name" />
      </div>

      <div>
        <Input placeholder="Phone number" className="" />
      </div>

      <Button>Order a call</Button>
    </form>
  );
};

export default OrderForm;
