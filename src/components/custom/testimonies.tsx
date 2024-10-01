"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaStar, FaQuoteRight } from "react-icons/fa6";
import { Section } from "@/components/custom/Section";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowUp } from "react-icons/io";
import { ITestimonial } from "@/interfaces/testimoial.interface";

const Testimonies = ({ testimonials }: { testimonials: ITestimonial[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };
  return (
    <Section bg="bg-gray-200">
      <div className="flex relative flex-col pb-12 py-6  ">
        <div className="text-center">our testimonials</div>
        <div className="custom-text text-center font-black">
          What our Customers Say
        </div>
        <div className="mt-5 w-full overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <Testimony key={testimonial._id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-4 my-2">
          <Button
            variant={"secondary"}
            className="rounded-full h-10 w-10 -rotate-90"
            onClick={onPrevButtonClick}
          >
            <IoIosArrowUp className="text-xl text-white" />
          </Button>
          <Button
            variant={"secondary"}
            className="rounded-full h-10 w-10 rotate-90"
            onClick={onNextButtonClick}
          >
            <IoIosArrowUp className="text-xl text-white" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

const Testimony = ({ testimonial }: { testimonial: ITestimonial }) => {
  return (
    <div className="min-w-0 flex-shrink-0 flex-grow-0 pe-4 mad-sm:pe-0 basis-1/3 max-lg:basis-1/2  max-md:basis-full ">
      <div className="bg-white flex flex-col gap-3 h-full py-4 px-2 rounded-lg shadow-lg">
        <div className="w-12 h-12 rounded-full flex justify-center bg-primary">
          <FaQuoteRight className="text-white m-auto text-lg" />
        </div>
        <div className="flex gap-4">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <p className="break-all">{testimonial.message}</p>
        <div className="font-semibold break-all mt-auto">{testimonial.name}</div>
      </div>
    </div>
  );
};

export default Testimonies;
