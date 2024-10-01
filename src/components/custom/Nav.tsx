"use client";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Nav = ({ onHero = false }: { onHero?: boolean }) => {
  const [isBottom, setIsBottom] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsBottom(true && !onHero);
      } else {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = ["about", "services", "products", "career", "contactus"];
  return (
    <div
      className={`${
        isBottom && ""
      } w-full   duration-200 mx-auto px-12 max-lg:px-6 max-md:px-3  text-white py-2 z-20 ${
        !onHero && !isBottom && "hidden"
      } ${
        isBottom &&
        "sticky top-0   duration-200 from-bottom-slide bg-white w-full bg-opacity-60 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`
        flex justify-between  max-w-[1500px] mx-auto
        `}
      >
        <Link href={"/"}>
          <Image
            src={logo}
            className={`w-12 ${!onHero && "bg-secondary"} `}
            alt="Logo"
          />
        </Link>
        <div
          className={`${
            isBottom && "text-secondary font-semibold"
          } flex gap-5 text- place-items-center text-sm max-md:hidden`}
        >
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
      </nav>
    </div>
  );
};

export default Nav;
