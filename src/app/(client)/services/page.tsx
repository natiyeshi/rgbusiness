import HomeProductWrapper from "@/components/custom/Wrappers/HomeProductsWrapper";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Workwithus from "@/components/custom/Workwithus";
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
