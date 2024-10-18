"use client";

import { useState } from "react";
import { ICareer } from "@/interfaces/career.interface";
import AddCareer from "./AddCareer";
import Career from "./Career";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialCareers: ICareer[];
}

const Careers = ({ initialCareers }: Props) => {
  const [careers, setCareers] = useState<ICareer[]>(initialCareers);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/career/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCareers((test) => test.filter((data) => data._id != id));
        return true;
      }
    } catch (error) {
      toast({
        description: "Error deleting career ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Careers</div>
        <AddCareer setCareers={setCareers} />
      </div>
      <div className=" text-adminText capitalize">Available Career</div>
      <div className="grid grid-cols-2 mt-8 gap-5 ">
        {careers.map((career) => (
          <Career
            key={career._id}
            career={career}
            onDelete={() => handleDelete(career._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Careers;
