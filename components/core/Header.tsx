import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="">
      <div className="">
        <div className="container mx-auto py-8 px-4 max-w-7xl">
          <div className="flex items-center justify-between -mx-4">
            <div className="mx-4 w-1/5">
              <p className="text-center flex flex-col">
                <span>Yosemite Mariposa</span>
                <span>County, Ca, USA</span>
              </p>
            </div>

            <div className="mx-4 flex-1 text-center">
              <Link href="/" className="inline-flex">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  width={181}
                  height={79}
                />
              </Link>
            </div>

            <div className="mx-4 w-1/5 flex flex-col items-end text-primary">
              <Link href="tel:+12345678900">+1 (234) 567 89 00</Link>
              <Link href="tel:+12345678901">+1 (234) 567 89 01</Link>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
