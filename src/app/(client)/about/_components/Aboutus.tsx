import { Button } from "@/components/ui/button";
import React from "react";
import { Section } from "@/components/custom/Section";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";

const Aboutus = () => {
  return (
    <Section bg="">
      <div className="flex  gap-5 place-items-center max-lg:flex-col-reverse min-h-[80vh]">
        <div className="basis-1/2 flex max-lg:mt-5">
          <Image
            src={logo}
            className="m-auto w-[300px] max-md:w-full max-md:h-[300px]  object-cover"
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
      <div className="w-full mt-12">
        <div className="text-primary font-semibold text-center">
          Our Sister Companies
        </div>
        <div className="font-black custom-text mt-2 text-center">
          Subsidiaries
        </div>
        <div className="mt-6 grid grid-cols-1 gap-10 mb-12">
          {/* Ramtex Trading */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">Ramtex Trading</div>
            <ul className="list-disc pl-6 text-left space-y-1">
              <li>
                Design, installation, and after-sales services of solar
                solutions (solar mini-grid and solar water pumping systems)
              </li>
              <li>
                Generators, compressors, and utility boilers installation and
                after-sales support
              </li>
              <li>
                Submersible and surface water pumps installation and after-sales
                services for irrigation, commercial, and residential water
                supply
              </li>
              <li>Agricultural machinery, equipment, and implements</li>
              <li>Irrigation sprinklers and piping systems</li>
              <li>Training and consulting services</li>
              <li>Industrial processes efficiency improvements</li>
              <li>Industrial chemicals and consumables</li>
              <li>Industrial machinery and equipment installation</li>
              <li>Spare parts supply and after-sales services</li>
            </ul>
          </div>

          {/* Danube Engineering */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">Danube Engineering</div>
            <ul className="list-disc pl-6 text-left space-y-1">
              <li>Steel structure fabrication and erection</li>
              <li>Office and home furniture</li>
              <li>Construction materials supply</li>
              <li>Prefabricated buildings</li>
              <li>MEP (Mechanical, Electrical, and Plumbing) works</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Aboutus;
