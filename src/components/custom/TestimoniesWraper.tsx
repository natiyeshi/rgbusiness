import { ITestimonial } from "@/interfaces/testimoial.interface";
import Testimonies from "./testimonies";

const TestimonialWraper = async () => {
  let testimonials: ITestimonial[] = [];
  testimonials = await getTestimonials();
  return <Testimonies testimonials={testimonials} />;
};

async function getTestimonials(): Promise<ITestimonial[]> {
  try {
    const res = await fetch(`https://rg-business.vercel.app/api/testimonial`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const testimonials: ITestimonial[] = await res.json();
    console.log(testimonials, "Testimonials Data");

    return testimonials;
  } catch (error) {
    console.log(error,"Testimonials error")
    return [];
  }
}

export default TestimonialWraper;
