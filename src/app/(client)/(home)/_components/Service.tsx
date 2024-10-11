import {
  FaSolarPanel,
  FaCog,
  FaWater,
  FaTractor,
  FaSeedling,
  FaTools,
  FaIndustry,
} from "react-icons/fa";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import OneService from "./OneService";

const services = [
  {
    title: "Solar Solutions",
    description:
      "Design, installation, and after-sales services of solar mini-grid and solar water pumping systems.",
    icon: FaSolarPanel,
  },
  {
    title: "Generators, Compressors & Boilers",
    description:
      "Installation and after-sales support for generators, compressors, and utility boilers.",
    icon: FaCog,
  },
  {
    title: "Water Pumps",
    description:
      "Submersible and surface water pumps installation and after-sales services for irrigation, commercial and residential water supply, and industrial process pumps.",
    icon: FaWater,
  },
  // {
  //   title: "Agricultural Machinery",
  //   description: "Agricultural machinery, equipment, and implements.",
  //   icon: FaTractor,
  // },
  // {
  //   title: "Irrigation Systems",
  //   description: "Irrigation sprinklers, piping systems.",
  //   icon: FaSeedling,
  // },
  // {
  //   title: "Training & Consulting",
  //   description: "Training and consulting services.",
  //   icon: FaTools,
  // },
  // {
  //   title: "Industrial Efficiency",
  //   description: "Industrial processes efficiency improvements.",
  //   icon: FaIndustry,
  // },
];

const Service = () => {
  return (
    <Section h={false} bg={"bg-secondary"}>
      <div className="flex flex-col w-full py-12 text-white">
        <div className="text-primary text-center">What we Provide for you</div>
        <div className="font-black custom-text text-center">Our Services</div>
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3  mt-12 gap-16">
          {services.map((service, index) => (
            <OneService
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
        <Link href={"/services"} className="mx-auto mt-12">
          <Button className="text-secondary font-bold">Service</Button>
        </Link>
      </div>
    </Section>
  );
};

export default Service;
