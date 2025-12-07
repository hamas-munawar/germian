import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader>
        <Navbar />
        <HeroSection />
        <Footer />
      </Preloader>
    </div>
  );
}
