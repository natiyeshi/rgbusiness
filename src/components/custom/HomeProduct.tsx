"use client";
import React from "react";
import productImg from "@/../public/assets/home/product.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/custom/Section";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowUp } from "react-icons/io";
import { IService } from "@/interfaces/service.interface";
import { getMaxString } from "@/utils/helper";
import ReadProduct from "./ReadProduct";

const HomeProduct = ({ products }: { products: IService[] }) => {
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
      <div className="flex relative w-full  flex-col pb-12 py-6 ">
        <div className="">our products</div>
        <div className="w-full flex justify-between">
          <div className="custom-text font-black">Products</div>
          <Link className="text-primary font-semibold" href="/products">
            View More
          </Link>
        </div>
        <div className="mt-5 w-full overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {products.map((product, ind) => (
              <Product key={ind} data={product} />
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

const Product = ({ data }: { data: IService }) => {
  return (
    <div className="min-w-0 flex-shrink-0 flex-grow-0   pe-4 mad-sm:pe-0 basis-1/4 max-lg:basis-1/3  max-md:basis-1/2  max-sm:basis-full ">
      <div className="bg-white flex  flex-col gap-3 py-2 px-2 h-full rounded-lg">
        <Image
          src={data.image}
          width={100}
          height={100}
          className="w-full rounded-lg h-[240px] object-cover"
          alt="Product"
          unoptimized
        />
        <div className="flex flex-col gap-2 ">
          <div className="font-semibold break-all">{data.name}</div>
          <div className="font-normal text-sm break-all">
            {getMaxString(data.desc)}
          </div>
        </div>
        <div className="mt-auto w-full">
          <ReadProduct data={data} />
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
