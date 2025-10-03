import React from "react";
import Container from "@/components/core/Container";
import { Card, CardContent } from "@/components/ui/card";
import OrderForm from "@/components/homepage/OrderForm";

const OrderBanner = () => {
  return (
    <section
      className="min-h-[320px] py-[140px]"
      style={{
        background:
          "url('https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b63c032b4e0023acecff?nowebp') 45.31% 26.32% / cover no-repeat, rgb(89, 150, 115);",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 gap-4">
          <Card className="col-start-2">
            <CardContent>
              <OrderForm className="min-h-[470px]" />
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default OrderBanner;
