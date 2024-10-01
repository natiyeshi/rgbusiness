import { ITestimonial } from "@/interfaces/testimoial.interface";
import Testimonies from "./testimonies";

const TestimonialWraper = async () => {
  let testimonials: ITestimonial[] = [];
  testimonials = await getTestimonials();
  return <Testimonies testimonials={testimonials} />;
};

async function getTestimonials(): Promise<ITestimonial[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const testimonials: ITestimonial[] = await res.json();
    return testimonials;
  } catch (error) {
    return [];
  }
}

export default TestimonialWraper;
