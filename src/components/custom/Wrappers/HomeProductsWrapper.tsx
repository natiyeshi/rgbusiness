import React from "react";
import { IService } from "@/interfaces/service.interface";
import HomeProduct from "../HomeProduct";

const HomeProductWrapper = async () => {
  let services: IService[] = [];
  services = await getServices();
  return <HomeProduct products={services} />;
};

async function getServices(): Promise<IService[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, {
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

export default HomeProductWrapper;
