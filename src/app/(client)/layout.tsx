import Footer from "@/components/custom/Footer";
import GotoAdmin from "@/components/custom/GotoAdmin";
import MobileNav from "@/components/custom/MobileNav";
import Nav from "@/components/custom/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <GotoAdmin />
      <Nav />
      {children}
      <Footer />
      <MobileNav />
    </div>
  );
}
