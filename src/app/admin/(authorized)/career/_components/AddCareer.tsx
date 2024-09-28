"use client";

import React from "react";
import { useFormik } from "formik";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { careerValidation } from "@/validation/career.validation";
import { ICareer } from "@/interfaces/career.interface";
import { useToast } from "@/hooks/use-toast";
import { FaPlus } from "react-icons/fa";

const AddCareer = ({ setCareers }: { setCareers: Function }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);
  const initialValues = {
    title: "",
    qualifications: [""], // Initial empty qualification
    placeName: "",
  };
  const { toast } = useToast();

  const formik = useFormik({
    initialValues,
    validationSchema: careerValidation,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/career", {
          method: "POST",
          body: JSON.stringify({ formData: values }),
        });

        if (!res.ok) {
          const response = await res.json();
          setError(response.message);
        } else {
          const response = await res.json();
          setCareers((careers: ICareer[]) => [...careers, response.newCareer]);
          formik.resetForm();
          setError("");
          setIsOpen(false);
          toast({
            description: "Career Added Successfully",
          });
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong");
      }
      setLoading(false);
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Career</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px] overflow-y-auto h-[95vh]">
        <form onSubmit={formik.handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Career</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex gap-5 pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-black font-semibold">
                    Career Title {error}
                  </label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Career Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.title}
                    </div>
                  ) : null}
                </div>

                {/* Qualifications Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="qualifications"
                    className="text-black font-semibold"
                  >
                    Qualifications
                  </label>
                  {formik.values.qualifications.map((qualification, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        id={`qualifications.${index}`}
                        name={`qualifications[${index}]`}
                        placeholder="Qualification"
                        value={qualification}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.values.qualifications.length > 1 && (
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => {
                            const qualifications =
                              formik.values.qualifications.filter(
                                (_, i) => i !== index
                              );
                            formik.setFieldValue(
                              "qualifications",
                              qualifications
                            );
                          }}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="secondary"
                    className="text-white w-fit flex gap-2"
                    onClick={() => {
                      formik.setFieldValue("qualifications", [
                        ...formik.values.qualifications,
                        "",
                      ]);
                    }}
                  >
                    <FaPlus />
                    <span>Add Qualification</span>
                  </Button>
                  {formik.touched.qualifications &&
                  formik.errors.qualifications ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.qualifications}
                    </div>
                  ) : null}
                </div>

                {/* Place Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="placeName"
                    className="text-black font-semibold"
                  >
                    Place Name
                  </label>
                  <Input
                    id="placeName"
                    name="placeName"
                    placeholder="Place Name"
                    value={formik.values.placeName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.placeName && formik.errors.placeName ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.placeName}
                    </div>
                  ) : null}
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit" disabled={loading}>
              Continue
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddCareer;
