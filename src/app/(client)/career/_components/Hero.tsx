import Image from "next/image";
import bgImg from "@/../public/assets/home/careerbg.png";
import Nav from "@/components/custom/Nav";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative h-[50vh] flex flex-col  gap-10">
      <Nav onHero />
      <Image
        src={bgImg}
        width={100}
        height={100}
        className="absolute object-contain z-10 w-full h-[50vh] left-0 right-0 top-0 bottom-0"
        alt="background"
        unoptimized
      />
      <div className=" z-10 absolute left-0 right-0 top-0 bottom-0 object-cover bg-black/50"></div>
      <div className="z-10 w-2/3 max-md:w-[90%]  max-w-[1000px] my-auto text-white mx-auto text-center flex flex-col gap-12">
        <div className="text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.1em] font-black z-10">
          Career
        </div>
        <div className="z-10 flex gap-2 place-content-center">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          /<div>Career</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
