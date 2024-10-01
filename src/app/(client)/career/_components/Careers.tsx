import React from "react";
import productImg from "@/../public/assets/home/product.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";

import { ICareer } from "@/interfaces/career.interface";
import Career from "./Career";

async function Careers() {
  let careers: ICareer[] = [];
  careers = await getCareers();
  return (
    <Section bg="bg-gray-200">
      <div className="flex relative w-full  flex-col pb-12 py-6 ">
        <div className="text-center">our Career</div>
        <div className="custom-text text-center font-black">Career</div>
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-2 mt-12 gap-16">
          {careers.map((career, ind) => (
            <Career key={ind} career={career} />
          ))}
        </div>
      </div>
    </Section>
  );
}

async function getCareers(): Promise<ICareer[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/career`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const services: ICareer[] = await res.json();
    return services;
  } catch (error) {
    return [];
  }
}

export default Careers;
