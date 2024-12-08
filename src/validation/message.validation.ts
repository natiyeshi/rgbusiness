import * as Yup from "yup";

export const messageValidation = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, "Must be at least 3 characters")
      .max(45, "Must be less than 45 characters"),
    email: Yup.string()
      .optional() 
      .email('Must be a valid email'), // Must be a valid email format
    message: Yup.string()
      .required('Message is required') // Message is mandatory
      .min(3, "Must be at least 3 characters")
      .max(2000, "Must be less than 2000 characters"),
});
  