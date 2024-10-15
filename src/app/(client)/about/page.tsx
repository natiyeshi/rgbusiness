import Workwithus from "@/components/custom/Workwithus";
import Aboutus from "./_components/Aboutus";
import TestimoniesWraper from "../../../components/custom/TestimoniesWraper";
import Hero from "./_components/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "About Us - RG Business Group",
    template: "%s - RG Business Group",
  },
  description:
    "Learn more about RG Business Group. Established in 2018, we provide solar solutions, electromechanical works, industrial chemical trading, and consulting services. We have grown to serve major factories and commercial businesses in Ethiopia.",
  keywords: [
    "About RG Business Group",
    "Our History",
    "Solar Solutions",
    "Electromechanical Works",
    "Industrial Chemical Trading",
    "Business Consulting",
    "Company Overview",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title: "About Us - RG Business Group",
    description:
      "Discover RG Business Group, established in 2018 and offering solar energy, industrial chemicals, electromechanical works, and consulting services to major businesses across Ethiopia.",
    type: "website",
    url: "https://rgbusinessgroup.com/about-us", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico",
        alt: "RG Business Group About",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Workwithus />
      <TestimoniesWraper />
    </div>
  );
}
