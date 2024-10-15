import HomeProductWrapper from "@/components/custom/Wrappers/HomeProductsWrapper";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Workwithus from "@/components/custom/Workwithus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Services - RG Business Group",
    template: "%s - RG Business Group",
  },
  description:
    "Explore RG Business Group's range of services including solar solutions, electromechanical works, water pumps installation, agricultural machinery, and consulting services for industrial efficiency and sustainability.",
  keywords: [
    "Solar Solutions",
    "Electromechanical Works",
    "Water Pump Installation",
    "Industrial Equipment",
    "Agricultural Machinery",
    "Consulting Services",
    "Efficiency Improvements",
    "Industrial Solutions",
    "RG Business Group Services",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title: "Our Services - RG Business Group",
    description:
      "RG Business Group offers a variety of services including solar solutions, water pump installations, industrial chemical trading, and consulting for businesses aiming for operational efficiency.",
    type: "website",
    url: "https://rgbusinessgroup.com/services", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico",
        alt: "RG Business Group Services",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Service />
      <HomeProductWrapper />
      <Workwithus />
    </div>
  );
}
