"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const MobileNav = () => {
  const pathname = usePathname();
  const links = ["about", "services", "products", "career", "contactus"];
  return (
    <div className="w-full flex-wrap sticky bottom-0 z-[1000] h-[10vh] z-80 bg-[#001520] text-white flex justify-center place-items-center place-content-center gap-5 text-xs md:hidden px-3">
      {links.map((link, ind) => (
        <Link
          key={ind}
          href={`/${link}`}
          className={`${
            "/" + link == pathname && "text-primary"
          } hover:text-primary duration-150 capitalize`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
