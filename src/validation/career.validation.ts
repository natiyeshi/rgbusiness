import * as Yup from "yup";

export const careerValidation = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(300, "Title must be less than 300 characters"),
  qualifications: Yup.array()
    .of(
      Yup.string()
        .required("Qualification is required")
        .min(2, "Qualification must be at least 2 characters")
        .max(100, "Qualification must be less than 100 characters")
    )
    .required("Qualifications are required")
    .min(1, "At least one qualification is required"),
  placeName: Yup.string()
    .required("Place name is required")
    .min(3, "Place name must be at least 3 characters")
    .max(100, "Place name must be less than 100 characters"),
});
