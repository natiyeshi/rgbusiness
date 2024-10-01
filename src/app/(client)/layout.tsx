import Footer from "@/components/custom/Footer";
import MobileNav from "@/components/custom/MobileNav";
import Nav from "@/components/custom/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Nav />
      {children}
      <Footer />
      <MobileNav />
    </div>
  );
}
