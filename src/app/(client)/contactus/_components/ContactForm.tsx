"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // Adjust import based on your folder structure
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { messageValidation } from "@/validation/message.validation";

const ContactForm = () => {
  const { toast } = useToast();

  // Validation schema
 

  // Initial values for form fields
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Handle form submission
  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    setSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        {
          // mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData: values }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      // Assuming response is okay
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you shortly.",
      });

      resetForm(); // Reset form after successful submission
    } catch (error) {
      console.log(error,"EEEEEEEEEEEEEEEEEE")
      toast({
        title: "Error",
        description: (error as any).message || "Failed to send message.",
        // status: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="basis-3/5 flex flex-col mx-3 px-6 py-4">
      <div className="text-xl font-semibold">Let Us Get in Touch!</div>
      <div className="mb-6">Contact us</div>
      <Formik
        initialValues={initialValues}
        validationSchema={messageValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field name="name" as={Input} placeholder="Your Full Name" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                as={Input}
                type="email"
                placeholder="Your Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <Field name="message" as={Textarea} placeholder="Your Message" />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <Button type="submit" className="w-fit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
