import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Mission from "@/components/Mission/Mission";
import About from "@/components/About/About";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-hidden font-nunito">
      <Navbar />
      <Header />
      <Services/>
      <Mission/>
      <About/>
      <Team/>
      <Footer />
    </main>
  );
}
