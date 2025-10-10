import Container from "@/components/core/Container";
import Headline from "@/components/core/Headline";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section>
        <Container className="text-center">
          <Image
            src="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00ca6c0e8de1002387c720_optimized_1521_c1396x930-90x30.webp"
            alt=""
            width={1000}
            height={500}
            className="w-full rounded-lg mb-5 max-w-6xl mx-auto"
          />

          <Headline className="mb-8">About Yosemite</Headline>

          <p className="text-lg mb-8">
            Yosemite National Park in picturesque Mariposa County invites you to
            explore this magnificent park in any season.
          </p>

          <p>
            We offer numerous things to do and view, such as aspiring granite
            rocks, thrilling waterfalls, and meadows. No matter it’s your
            first-time visit to Yosemite National Park or you’re a regular
            guest, be sure you’ll always find something unique here. Rent any of
            our cabins and enjoy your stay!
          </p>
        </Container>
      </section>

      <section>
        <Container className="text-center">
          <p className="mb-12">
            We have a children's playground with a number of swings and slides.
            Our spacious terrain is for you to relax in the outdoors. You don't
            need to take food with you, as we offer a shop with the freshest
            local produce including bakery and butchery. Our cafe is open 7 days
            a week from 9:30 for our famous free breakfasts, and a diverse menu
            of lunches. Additionally, we offer a variety of cabins for you to
            choose from. Here are some of them:
          </p>

          <div className="grid grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={index} className="text-center">
                    <Image
                      src={
                        "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00a99c378c090023b0f166_optimized_1396.webp"
                      }
                      alt=""
                      width={1000}
                      height={500}
                      className="w-full rounded-xl mb-4"
                    />

                    <Headline level={4} className="mb-3">
                      Horse Ranch Cottage
                    </Headline>

                    <p>
                      This private cottage is located within the Horse Ranch
                      with a spacious fenced area. Explore a lot of tree-lined
                      trails, see ranch animals and spectacular views.
                    </p>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
