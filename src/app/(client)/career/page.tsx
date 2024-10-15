import Aboutus from "../(home)/_components/Aboutus";
import Hero from "./_components/Hero";
import Workwithus from "@/components/custom/Workwithus";
import Careers from "./_components/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Career Opportunities - RG Business Group",
    template: "%s - RG Business Group",
  },
  description:
    "Join the team at RG Business Group. Explore career opportunities in industries such as solar energy, electromechanical works, and industrial equipment. Grow your career with us.",
  keywords: [
    "Careers",
    "Job Opportunities",
    "RG Business Group Jobs",
    "Career in Solar Industry",
    "Career in Electromechanical",
    "Industrial Jobs",
    "Join RG Business Group",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title: "Career Opportunities - RG Business Group",
    description:
      "Explore career opportunities at RG Business Group and join our team in various industries including solar solutions, electromechanical works, and industrial equipment. Apply today.",
    type: "website",
    url: "https://rgbusinessgroup.com/career", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico",
        alt: "RG Business Group Careers",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Careers />
      <Workwithus />
    </div>
  );
}
