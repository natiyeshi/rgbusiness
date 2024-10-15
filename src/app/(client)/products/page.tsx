import Hero from "./_components/Hero";
import Workwithus from "@/components/custom/Workwithus";
import Products from "./_components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Products - RG Business Group",
    template: "%s - RG Business Group",
  },
  description:
    "Explore a wide range of industrial products offered by RG Business Group, including solar solutions, generators, compressors, boilers, agricultural machinery, and water pumps. We provide high-quality products and after-sales services to meet your industrial needs.",
  keywords: [
    "Industrial Products",
    "Solar Solutions",
    "Generators",
    "Compressors",
    "Boilers",
    "Water Pumps",
    "Agricultural Machinery",
    "Industrial Efficiency",
    "RG Business Group Products",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title: "Products - RG Business Group",
    description:
      "RG Business Group offers a wide range of industrial products including solar solutions, generators, compressors, and agricultural machinery. Discover our full product lineup today.",
    type: "website",
    url: "https://rgbusinessgroup.com/products", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico",
        alt: "RG Business Group Products",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Products />
      <Workwithus />
    </div>
  );
}
