"use client";
import Image from "next/image";
import part1 from "@/../public/assets/partners/part1.png";
import part2 from "@/../public/assets/partners/part2.png";
import part3 from "@/../public/assets/partners/part3.png";
import part4 from "@/../public/assets/partners/part4.png";
import part5 from "@/../public/assets/partners/part5.png";
import part6 from "@/../public/assets/partners/part6.png";
import part7 from "@/../public/assets/partners/part7.png";
import part8 from "@/../public/assets/partners/part8.png";
import part9 from "@/../public/assets/partners/part9.png";
import part10 from "@/../public/assets/partners/part10.png";
import part11 from "@/../public/assets/partners/part11.png";
import part12 from "@/../public/assets/partners/part12.png";
import part13 from "@/../public/assets/partners/part13.png";
import part14 from "@/../public/assets/partners/part14.png";
import part15 from "@/../public/assets/partners/part15.png";
import part16 from "@/../public/assets/partners/part16.png";
import part17 from "@/../public/assets/partners/part17.png";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "@/components/custom/Section";
import { IPartner } from "@/interfaces/partner.interface";

const Partners = ({ partners } : { partners : IPartner[]}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 1200,
      jump: false,
    }),
  ]);

  return (
    <Section bg={""} h={false}>
      <div id="partners" className="my-8 ">
        <div className="">our partners</div>
        <div className="custom-text font-black  mt-2">
          Some of <span className="text-primary">our Partners</span>
        </div>
        <div className="overflow-hidden mt-16 cursor-grab " ref={emblaRef}>
          <div className="flex gap-10">
            {partners.map((parner, ind) => (
              <div
                key={parner._id}
                className="w-fit min-w-0 flex justify-center items-center flex-none basis-1/6 max-md:basis-1/4"
              >
                <Image
                  src={parner.image}
                  width={100}
                  height={100}
                  className="max-sm:w-[85px] max-sm:h-[55px]  w-[150px] "
                  alt="Lina"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Partners;
