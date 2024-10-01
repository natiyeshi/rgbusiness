import { Section } from "@/components/custom/Section";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { MdEmail } from "react-icons/md";

export default function Contactus() {
  return (
    <Section bg="bg-gray-200 py-6">
      <div className="px-4 py-4 rounded-xl md:mx-6 gap-6  w-full bg-white grid grid-cols-2 max-md:grid-cols-1 ">
        <div className="basis-2/5 bg-secondary rounded-xl px-6 py-4 flex flex-col gap-4 text-white">
          <div className="text-xl font-semibold">Contact Information</div>
          <div>
            Let's connect and collaborate to make a lasting impact on the world.
            Together, we can drive meaningful change and create a brighter, more
            sustainable future for all.
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 place-items-center">
              <FaLocationDot className="text-2xl text-primary " />
              <div>
                Yeka subcity, 22 Rebecca building, Addis Ababa, Ethiopia.
              </div>
            </div>
            <div className="flex gap-3 place-items-center">
              <MdEmail className="text-2xl text-primary " />
              <div>robel2124@gmail.com</div>
            </div>
            <a
              href="tel:+251911125569"
              className="flex gap-3 place-items-center"
            >
              <FaPhone className="text-2xl text-primary " />
              <div>+251911125569</div>
            </a>
            <a
              href="tel:+251920141405"
              className="flex gap-3 place-items-center"
            >
              <FaPhone className="text-2xl text-primary " />
              <div>+251920141405</div>
            </a>
            <a
              href="tel:+971529223901"
              className="flex gap-3 place-items-center"
            >
              <FaPhone className="text-2xl text-primary " />
              <div>+971529223901</div>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1588.730016988788!2d38.78392536529646!3d9.01560619146741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1727606807252!5m2!1sen!2set"
        className="w-full mt-12"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Section>
  );
}
