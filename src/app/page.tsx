import  { Header } from "../components/Header";
import  { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Deals from "../components/Deals/TopDeal";
import { Brand } from "../components/Brand";
import { Device } from "../components/Device";
import { Gadget } from "../components/Gadget";
import Photography from "../components/Photography/MediaEquipments";
import CallToAction from "../components/CallToAction";
import { Product } from "../components/Product";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
    <div className="bg-[#e2e4eb]">
    <Header />
    <Navbar />
    <Hero />
    <Deals />
    <Brand />
    <Device />
    <Gadget />
    <Photography />
    <CallToAction />
    <Product />
    <About />
    </div>
    <Footer />
    </>
  );
}