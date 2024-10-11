// components/AdminLink.tsx
import { getServerSession } from "next-auth"; // Import getServerSession for server-side session check
import Link from "next/link";
import { FaUserShield } from "react-icons/fa";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Section } from "./Section";

const GotoAdmin = async () => {
  const session = await getServerSession(options); // Server-side session check

  // If no session, return nothing (the component won't render)
  if (!session) {
    return null;
  }

  return session ? (
    <Section h={false} bg="bg-slate-700 sticky top-0">
      <div className=" text-white py-2 flex justify-end">
        <a
          href="/admin"
          className="flex items-center gap-2 text-sm hover:underline"
          target="_blank"
        >
          <FaUserShield className="text-lg" />
          Go to Admin
        </a>
      </div>
    </Section>
  ) : (
    <></>
  );
};

export default GotoAdmin;
