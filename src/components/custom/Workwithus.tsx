import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";

const Workwithus = () => {
  return (
    <div className="flex  bg-[#001520] overflow-hidden relative text-white flex-col place-content-center gap-5 p-12 place-items-center h-[70vh]">
      <div className="absolute max-md:hidden -top-10 -left-10 w-48 border-[40px] border-primary/30 h-48 rounded-full bg-secondary/30 "></div>
      <div className="absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-[52px] border-primary/30 rounded-full bg-secondary/30 "></div>
      <div className="absolute max-md:hidden -bottom-10 -right-10 w-48 border-[40px] border-primary/30 h-48 rounded-full bg-secondary/30 "></div>
      <div className="max-md:text-center z-10 font-black text-center custom-text">
        Want to work with us ?
      </div>
      <div className="max-md:text-center z-10 text-xl font-semibold">
        Let us meet and change the world
      </div>
      <a
        href="tel:+251911125569"
        className="mt-5 z-10 text-lg py-4 px-4 text-secondary  font-semibold"
      >
        <Button>
          <FaPhone className="text-secondary text-xl" />
          <div>+251911125569</div>
        </Button>
      </a>
    </div>
  );
};

export default Workwithus;
