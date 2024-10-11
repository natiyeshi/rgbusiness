import { Button } from "@/components/ui/button";
import React from "react";
import { Section } from "@/components/custom/Section";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";
import { FaCheck } from "react-icons/fa";

const Aboutus = () => {
  return (
    <Section bg="bg-slate-100">
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
          <div className="text-primary font-semibold max-md:mt-6">
            Who we Are ?
          </div>
          <div className="font-black custom-text mt-2">About US</div>
          <div className="text-sm mt-4">
            Established in 2018, RG Business Group began as a garment, textile,
            and safety equipment trading company. Since then, the business has
            expanded into various industries, including furniture production,
            steel structure erection, electromechanical works, and industrial
            chemical trading. RG Business Group serves major factories and
            commercial businesses, offering comprehensive services in multiple
            sectors
          </div>
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
          <div className="flex flex-col gap-2 ps-2 border-l-[6px] border-primary bg-white shadow-lg py-4">
            <div className="font-bold text-lg">Ramtex Trading</div>
            <p className="py-2">
              Ramtex Trading specializes in the design, installation, and
              after-sales services of solar solutions, water pumps, and
              industrial equipment, offering comprehensive support for
              agricultural, commercial, and residential needs.{" "}
            </p>
            <ul className="pl-2 text-left space-y-1 text-sm">
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>
                  Design, installation, and after-sales services of solar
                  solutions (solar mini-grid and solar water pumping systems)
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>
                  Generators, compressors, and utility boilers installation and
                  after-sales support
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>
                  Submersible and surface water pumps installation and
                  after-sales services for irrigation, commercial, and
                  residential water supply
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Agricultural machinery, equipment, and implements</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Irrigation sprinklers and piping systems</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Training and consulting services</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Industrial processes efficiency improvements</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Industrial chemicals and consumables</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Industrial machinery and equipment installation</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Spare parts supply and after-sales services</div>
              </li>
            </ul>
          </div>

          {/* Danube Engineering */}
          <div className="flex flex-col gap-2 ps-2 py1 border-l-[6px] border-primary bg-white shadow-lg py-4">
            <div className="font-bold text-lg">Danube Engineering</div>
            <p className="py-2">
              Danube Engineering specialize in steel structure fabrication,
              erection, and prefabricated building solutions, along with
              comprehensive MEP (Mechanical, Electrical, and Plumbing) services.
              Additionally, we supply quality construction materials and craft
              durable office and home furniture.
            </p>
            <ul className="pl-2 text-left space-y-1 text-sm">
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Steel structure fabrication and erection</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Office and home furniture</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Construction materials supply</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>Prefabricated buildings</div>
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600 text-sm" />
                <div>MEP (Mechanical, Electrical, and Plumbing) works</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Aboutus;
