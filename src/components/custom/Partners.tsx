"use client";
import Image from "next/image";

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
