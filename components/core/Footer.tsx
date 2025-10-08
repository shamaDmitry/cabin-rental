import { cn } from "@/lib/utils";
import React from "react";
import Container from "@/components/core/Container";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface FooterProps {
  className?: string;
}

const menu = [
  {
    id: uuidv4(),
    href: "/about",
    label: "About",
  },
  {
    id: uuidv4(),
    href: "/photos",
    label: "Photos",
  },
  {
    id: uuidv4(),
    href: "/accommodation",
    label: "Accommodation",
  },
  {
    id: uuidv4(),
    href: "/policies",
    label: "Rental policies",
  },
  {
    id: uuidv4(),
    href: "/contact",
    label: "How to get there",
  },
];

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("py-20", className)}>
      <Container>
        <div className="flex items-center">
          <div className="flex-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={146}
                height={62}
              />
            </Link>
          </div>

          <div className="flex-1">
            <nav className="flex flex-wrap gap-4">
              {menu.map((item) => {
                return (
                  <Link key={item.id} href={item.href}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-4">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
