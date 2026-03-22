import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import TechBackground from "@/components/TechBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CoreSpecialisms from "@/components/CoreSpecialisms";
import WhatWeDo from "@/components/WhatWeDo";
import ClientsCandidates from "@/components/ClientsCandidates";
import Positioning from "@/components/Positioning";
import WhyKnowles from "@/components/WhyKnowles";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <TechBackground />
      <Header />
      <Hero />
      <TrustBar />
      <CoreSpecialisms />
      <WhatWeDo />
      <ClientsCandidates />
      <Positioning />
      <WhyKnowles />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
