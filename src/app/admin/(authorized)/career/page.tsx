import AdminNav from "../_components/AdminNav";
import AddCareer from "./_components/AddCareer";
import Careers from "./_components/Careers";
import Career from "./_components/Career";
import { ICareer } from "@/interfaces/career.interface";

const Page = async () => {
  let careers: ICareer[] = [];
  careers = await getCareers();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Careers initialCareers={careers} />
    </div>
  );
};

async function getCareers(): Promise<ICareer[]> {
  try {
    const res = await fetch(`/api/career`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const careers: ICareer[] = await res.json();
    return careers;
  } catch (error) {
    return [];
  }
}

export default Page;
