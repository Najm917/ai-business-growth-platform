import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HomePage from "./Pages/HomePage";
import AboutCompany from "../src/components/AboutCompany";
import PainPointPage from "./pages/PainPointPage";
import PricingPage from "./pages/PricingPage";
import ReferralPage from "./pages/ReferralPage";
import CompetitorPage from "./pages/CompetitorPage";

export default function App() {
  return (
    <Router>
      {/* Background Container */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920')]">
        {/* Soft Warm Yellowish Overlay for Light Mode & Dark Overlay for Dark Mode */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950/90 backdrop-blur-[1px] transition-colors duration-300"></div>

        {/* Page Content */}
        <div className="relative z-10">
          <Navbar />

          {/* Global Page Header */}
          <header className="max-w-4xl mx-auto text-center pt-8 px-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-950 dark:text-white mb-2 transition-colors">
              AI-Driven Digital Growth Platform
            </h1>
            <p className="text-amber-900/80 dark:text-slate-300 text-sm sm:text-base transition-colors">
              Transforming local businesses with smart AI strategies, website
              development, & marketing.
            </p>
          </header>

          <main className="pb-12">
            <Routes>
              <Route path="/" element={<AboutCompany />} />
              <Route path="/pain-points" element={<PainPointPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/referral" element={<ReferralPage />} />
              <Route path="/competitor" element={<CompetitorPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
