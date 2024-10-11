// import Image from "next/image";
// import LoginForm from "../admin/register/_components/signup";
// import { getServerSession } from "next-auth";
// import { options } from "../api/auth/[...nextauth]/options";
// import Link from "next/link";
// // import

// export default async function Home() {
//   const session = await getServerSession(options);
//   return (
//     <div className="">
//       {session ? (
//         <Link href="/api/auth/signout">Logout {session.user?.email}</Link>
//       ) : (
//         <Link href="/api/auth/signin">Login</Link>
//       )}
//     </div>
//   );
// }

import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Aboutus from "./_components/Aboutus";
import Workwithus from "../../../components/custom/Workwithus";
import TestimonialWraper from "@/components/custom/TestimoniesWraper";
import HomeProductWrapper from "@/components/custom/Wrappers/HomeProductsWrapper";
import PartnersWrapper from "@/components/custom/PartnersWrapper";

export default function Page() {
  return (
    <div>
      <Hero />
      <Service />
      <Aboutus />
      <HomeProductWrapper />
      <Workwithus />
      <PartnersWrapper />
      <TestimonialWraper />
    </div>
  );
}
