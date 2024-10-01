import { Button } from "@/components/ui/button";
import React from "react";
import { Section } from "@/components/custom/Section";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";

const Aboutus = () => {
  return (
    <Section bg="">
      <div className="flex max-lg:flex-col gap-5 place-items-center min-h-[80vh]">
        <div className="basis-1/2 flex">
          <Image
            src={logo}
            className="m-auto w-1/2 object-cover"
            unoptimized
            alt=""
          />
        </div>
        <div className="basis-1/2 flex flex-col ">
          <div className="text-primary font-semibold">Who we Are ?</div>
          <div className="font-black custom-text mt-2">About US</div>
          <div className="text-sm mt-4">
            Established in 2018, RG Business began as a garment, textile, and
            safety equipment trading company. Since then, the business has
            expanded into various industries, including furniture production,
            steel structure erection, electromechanical works, and industrial
            chemical trading. RG Business serves major factories and commercial
            businesses, offering comprehensive services in multiple sectors
          </div>
          <Link className="w-fit mt-8" href="/about">
            <Button>Find out More</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Aboutus;
