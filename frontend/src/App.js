import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Specialisms from "@/components/Specialisms";
import Clients from "@/components/Clients";
import Candidates from "@/components/Candidates";
import WhyKnowles from "@/components/WhyKnowles";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Positioning />
      <Specialisms />
      <Clients />
      <Candidates />
      <WhyKnowles />
      <Process />
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
