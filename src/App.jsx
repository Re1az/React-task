import React from "react";
import Backgroundimage from "./Components/Backgroundimage";
import Theapp from "./Components/Theapp";
import ClaritySection from "./Components/ClaritySection";
import Features from "./Components/Features";
import Pricesection from "./Components/Pricesection";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="max-sm:w-fit">
      <Backgroundimage />
      <Theapp />
      <ClaritySection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
