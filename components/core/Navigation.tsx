import Link from "next/link";
import React from "react";

const menu = [
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Gallery", path: "/gallery" },
  { id: 3, name: "Accommodation", path: "/accommodation" },
  { id: 4, name: "How to get there", path: "/contact" },
];

const Navigation = () => {
  return (
    <nav className="flex gap-4 justify-center ">
      {menu.map((item) => {
        return (
          <Link href={item.path} key={item.id} className="my-1.5 mx-5">
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
