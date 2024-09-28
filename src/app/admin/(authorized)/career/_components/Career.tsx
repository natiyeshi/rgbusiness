"use client";
import { useState } from "react";
import {
  FaCalendar,
  FaCheck,
  FaInstagram,
  FaLocationPin,
} from "react-icons/fa6";
import { ICareer } from "@/interfaces/career.interface";
import { formatDate } from "@/utils/helper";
import ReadCareer from "./ReadCareer";
import AreYouSureDelete from "../../_components/AreYouSureDelete";

const Career = ({
  career,
  onDelete,
}: {
  career: ICareer;
  onDelete: Function;
}) => {
  const [showAllQualifications, setShowAllQualifications] = useState(false);

  // Determine whether to show all qualifications or just the first two
  const displayedQualifications = showAllQualifications
    ? career.qualifications
    : career.qualifications.slice(0, 2);

  return (
    <div className="flex flex-col gap-2 bg-white px-3 py-4 rounded-xl shadow-lg">
      {/* Career Title */}
      <div className="text-lg font-bold">{career.title}</div>

      {/* Location and Date */}
      <div className="flex justify-between text-sm">
        <div className="flex gap-2 place-items-center">
          <FaLocationPin className="text-primary" />
          <div>{career.placeName}</div>
        </div>
        <div className="flex gap-2">
          <FaCalendar className="text-primary place-items-center" />
          <div>
            {formatDate(
              career.createdAt
                ? new Date(career.createdAt)
                : new Date(Date.now())
            )}
          </div>
        </div>
      </div>

      {/* Minimum Qualifications */}
      <div>Minimum qualifications</div>
      <div className="ps-2 text-sm">
        {displayedQualifications.map((qualification, index) => (
          <div key={index} className="flex gap-3">
            <FaCheck className="text-primary" />
            <div>{qualification}</div>
          </div>
        ))}
        {career.qualifications.length > 2 && (
          <div className="flex gap-3">
            <FaCheck className="text-primary" />
            <div>...</div>
          </div>
        )}
      </div>

      <div className="flex justify-between  mt-2 w-full">
        <ReadCareer data={career} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Career;
