import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Mission from "@/components/Mission/Mission";
import About from "@/components/About/About";
import Team from "@/components/Team/Team";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <main className="overflow-hidden  font-nunito">
      <Navbar />
      <Header />
      <Services />
      <Mission />
      <About />
      <Team />
      <Form />
      <Footer />
    </main>
  );
}
