import type { Metadata } from "next";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default:
      "RG Business Group - Solar Solutions, Electromechanical Works, and Industrial Equipment in Ethiopia",
    template: "%s - RG Business Group",
  },
  description:
    "RG Business Group provides solar solutions, electromechanical works, industrial chemical trading, water pumps, agricultural machinery, and consulting services. Based in Addis Ababa, Ethiopia, RG Business Group has been serving major factories and businesses since 2018.",
  keywords: [
    "Solar Solutions",
    "Solar mini-grid installation",
    "Solar water pumping systems",
    "Generators and Compressors",
    "Boilers",
    "Water Pumps",
    "Agricultural Machinery",
    "Industrial Efficiency",
    "Irrigation Systems",
    "Consulting services",
    "Industrial chemical trading",
    "Steel structures",
    "Electromechanical works in Ethiopia",
    "Furniture production Ethiopia",
    "RG Business Group",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "RG Business Group" }],
  openGraph: {
    title:
      "RG Business Group - Solar Solutions, Electromechanical Works, and Industrial Equipment in Ethiopia",
    description:
      "RG Business Group provides a wide range of services, including solar energy solutions, electromechanical works, industrial chemical trading, water pump installation, and agricultural machinery for businesses and factories.",
    type: "website",
    url: "https://rgbusinessgroup.com", // Ensure the URL is correct
    siteName: "RG Business Group",
    images: [
      {
        url: "/favicon.ico", // Ensure this path is correct
        alt: "RG Business Group",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientSessionProvider>
        <body className={`${montserrat.className}  antialiased`}>
          {children}
        </body>
      </ClientSessionProvider>
    </html>
  );
}
