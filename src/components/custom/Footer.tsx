import React from "react";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";
import {
  FaInstagram,
  FaPhone,
  FaFacebook,
  FaX,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";
import { Section } from "@/components/custom/Section";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const links = ["about", "services", "products", "career", "contactus"];

  return (
    <Section bg="bg-[#001520]">
      <div className="w-full  text-white">
        <div className="flex max-lg:flex-col max-lg:gap-8 pt-16 ">
          <div className="basis-1/3 max-lg:basis-full ">
            <div className="flex gap-2">
              <Image src={logo} className="w-12" alt="Logo" />
              <div className="font-bold text-xl self-end">
                Rg Business Group
              </div>
            </div>
            <p className="mt-8">
              RG Business Group, established in 2018 as garment and textile, and
              safety equipment trading and sourcing has expanded in to furniture
              and steel structures erection, Electromechanical works and
              industrial chemicals trading supplying to major factories and
              commercial businesses
            </p>
            <div className="mt-20 max-md:mt-8">Let Us Get In Touch</div>
            <div className="flex gap-5 mt-2 flex-wrap">
              <Link
                href={"https://t.me/+251911125569"}
                target="_blank"
                className="flex w-12 h-12 bg-primary rounded-full"
              >
                <FaTelegram className="m-auto text-2xl text-secondary" />
              </Link>

              <Link
                href={"https://wa.me/+251911125569"}
                target="_blank"
                className="flex w-12 h-12 bg-primary rounded-full"
              >
                <FaWhatsapp className="m-auto text-2xl text-secondary" />
              </Link>

              <Link
                href={"https://wa.me/+971529223901"}
                target="_blank"
                className="flex w-12 h-12 bg-primary rounded-full"
              >
                <FaWhatsapp className="m-auto text-2xl text-secondary" />
              </Link>
            </div>
          </div>
          <div className="basis-1/3 max-lg:basis-full flex">
            <div className="w-fit lg:mx-auto flex flex-col  ">
              <div className="text-xl font-semibold text-left">Pages</div>
              <div className="flex flex-col gap-3 mt-5 ">
                {links.map((link, ind) => (
                  <Link
                    key={ind}
                    href={`/${link}`}
                    className="hover:text-primary capitalize"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="basis-1/3 max-lg:basis-full flex">
            <div className="lg:mx-auto flex flex-col gap-5">
              <div className="text-xl font-semibold ">Let us get in touch!</div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 place-items-center py-1">
                  <FaLocationDot className="text-2xl text-primary " />
                  <div>
                    Yeka subcity, 22 Rebecca building, Addis Ababa, Ethiopia.
                  </div>
                </div>
                <div className="flex py-1 gap-3 place-items-center">
                  <MdEmail className="text-2xl text-primary " />
                  <div>robel2124@gmail.com</div>
                </div>
                <a
                  href="tel:+251911125569"
                  className="flex py-1 gap-3 place-items-center"
                >
                  <FaPhone className="text-2xl text-primary " />
                  <div className="">+251911125569</div>
                </a>
                <a
                  href="tel:+251920141405"
                  className="flex py-1 gap-3 place-items-center"
                >
                  <FaPhone className="text-2xl text-primary " />
                  <div className="">+251920141405</div>
                </a>
                <a
                  href="tel:+971529223901"
                  className="flex py-1 gap-3 place-items-center"
                >
                  <FaPhone className="text-2xl text-primary " />
                  <div>+971529223901</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-4 pb-8 mt-20 border-primary/35 w-full flex justify-center">
          Copyright © 2024 RG Business Group
        </div>
      </div>
    </Section>
  );
};

export default Footer;
