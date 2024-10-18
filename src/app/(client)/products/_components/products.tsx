import React from "react";
import productImg from "@/../public/assets/home/product.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import { IService } from "@/interfaces/service.interface";
import ReadProduct from "@/components/custom/ReadProduct";
import { getMaxString } from "@/utils/helper";

const Products = async () => {
  let products: IService[] = [];
  products = await getServices();
  return (
    <Section bg="bg-gray-200">
      <div className="flex relative w-full  flex-col pb-12 py-6 ">
        <div className="text-center">our products</div>
        <div className="custom-text text-center font-black">Products</div>

        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 mt-12 gap-12">
          {products.map((product, ind) => (
            <Product key={ind} data={product} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Product = ({ data }: { data: IService }) => {
  return (
    <div className="min-w-0 flex-shrink-0 flex-grow-0 h-full pe-4 mad-sm:pe-0 basis-1/4 max-lg:basis-1/3  max-md:basis-1/2  max-sm:basis-full ">
      <div className="bg-white flex flex-col gap-3 py-2 px-2 h-full rounded-lg">
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
        <ReadProduct data={data} />
      </div>
    </div>
  );
};

async function getServices(): Promise<IService[]> {
  try {
    const res = await fetch(`/api/service`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const services: IService[] = await res.json();
    return services;
  } catch (error) {
    return [];
  }
}

export default Products;
