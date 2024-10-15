import Workwithus from "@/components/custom/Workwithus";
import Hero from "./_components/Hero";
import Contactus from "./_components/Contactus";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Contact Us - RG Business Group",
    template: "%s - RG Business Group",
  },
  description:
    "Get in touch with RG Business Group. Contact us for solar solutions, electromechanical works, industrial equipment, and consulting services. Let's collaborate for a brighter future.",
  keywords: [
    "Contact RG Business Group",
    "Solar Solutions",
    "Industrial Equipment",
    "Consulting Services",
    "Electromechanical Works",
    "Business Inquiries",
    "Contact Information",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title: "Contact Us - RG Business Group",
    description:
      "Reach out to RG Business Group for inquiries regarding our products and services, including solar solutions, industrial equipment, and consulting services. We look forward to connecting with you.",
    type: "website",
    url: "https://rgbusinessgroup.com/contact-us", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico",
        alt: "RG Business Group Contact",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Contactus />
      <Workwithus />
    </div>
  );
}
