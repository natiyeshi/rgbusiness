import Image from "next/image";
import bgImg from "@/../public/assets/home/bg.png";
import { Button } from "@/components/ui/button";
import Nav from "@/components/custom/Nav";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative h-[100vh] bg-slate-900 flex flex-col  gap-10">
      <Nav onHero />
      <Image
        src={bgImg}
        width={100}
        height={100}
        className="absolute object-cover z-10 w-full h-[100vh] left-0 right-0 top-0 bottom-0"
        alt="background"
        unoptimized
      />
      <div className=" z-10 absolute left-0 right-0 top-0 bottom-0 object-cover bg-black/50"></div>
      <div className="z-10 w-2/3 max-md:w-[90%]  max-w-[1000px] my-auto text-white mx-auto text-center flex flex-col gap-12">
        <div className="text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.1em] font-black z-10">
          <span className="text-primary">Empowering</span> Your Future with
          Sustainable <span className="text-primary">Solutions.</span>
        </div>
        <div className="z-10">
          Welcome to RG Business Group, your trusted partner in innovative
          solutions for a sustainable future. we’ve specialized in providing
          top-notch services in solar energy, industrial equipment, agricultural
          machinery, and more.
        </div>
        <div className="flex gap-5 mx-auto">
          <Link href={"/services"}>
            <Button variant={"outline"}>Our Service</Button>
          </Link>
          <Link href={"/contactus"}>
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
