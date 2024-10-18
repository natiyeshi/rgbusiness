import React from "react";
import { IPartner } from "@/interfaces/partner.interface";
import Partners from "./Partners";

const PartnersWrapper = async () => {
  let partners: IPartner[] = [];
  partners = await getPartners();
  return partners.length > 0 ? <Partners partners={partners} /> : <></>;
};

async function getPartners(): Promise<IPartner[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partner`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const partners: IPartner[] = await res.json();
    return partners;
  } catch (error) {
    return [];
  }
}

export default PartnersWrapper;
