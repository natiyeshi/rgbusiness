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
import Link from "next/link";
import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Career = ({ career }: { career: ICareer }) => {
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

      {/* Show 'See Detail' Button if Qualifications are Truncated */}

      {/* Contact Info */}
      <div className="text-sm">
        If you are interested in this job, contact us through the links below:
      </div>

      {/* Social Media Links */}
      <div className="flex gap-3 justify-between mt-auto">
        <div className="flex gap-4">
          <Link
            href={"https://t.me/+251911125569"}
            target="_blank"
            className="flex w-8 h-8 bg-primary rounded-full"
          >
            <FaTelegram className="m-auto text-lg  text-white text-secondary" />
          </Link>
          <Link
            href={"https://wa.me/+251911125569"}
            target="_blank"
            className="flex w-8 h-8 bg-primary rounded-full"
          >
            <FaWhatsapp className="m-auto text-lg text-white text-secondary" />
          </Link>
        </div>
        <ReadCareer data={career} />
        {/* Repeat the same structure for other social media links as needed */}
      </div>
    </div>
  );
};

export default Career;
