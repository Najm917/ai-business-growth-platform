import React from "react";

export default function AboutCompany() {
  const companyInfo = {
    name: "GrowthPlatform AI",
    tagline: "Empowering Local Businesses with Smart Digital & AI Solutions",
    about:
      "GrowthPlatform AI is a forward-thinking digital growth platform dedicated to transforming traditional and local businesses into modern, tech-driven powerhouses. We specialize in custom web development, AI automation, local SEO, and performance marketing to help small and medium enterprises outpace their competitors.",
    stats: [
      { label: "Satisfied Clients", value: "250+" },
      { label: "AI Implementations", value: "500+" },
      { label: "Average Growth", value: "3.5x" },
      { label: "Partner Earnings Paid", value: "₹5L+" },
    ],
    services: [
      {
        title: "AI-Powered Web Development",
        desc: "Fast, responsive, and high-converting websites integrated with smart AI tools.",
      },
      {
        title: "Local Market Strategy & SEO",
        desc: "Dominate local search listings and drive high-intent walk-in and online customers.",
      },
      {
        title: "Competitor Intelligence",
        desc: "Identify market gaps and leverage automated tactics to stay ahead of rivals.",
      },
      {
        title: "Partner Ecosystem",
        desc: "A rewarding referral program that empowers anyone to earn by connecting local businesses.",
      },
    ],
  };

  return (
    <div className="p-6 sm:p-8 bg-transparent backdrop-blur-md rounded-2xl shadow-md border  transition-colors space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-3">
        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
          About Our Platform
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
          {companyInfo.name}
        </h2>
        <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 max-w-2xl mx-auto">
          {companyInfo.tagline}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto pt-2">
          {companyInfo.about}
        </p>
      </div>

      {/* Highlights / Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-gray-200 dark:border-gray-700 py-6">
        {companyInfo.stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 text-center">
          What We Do Best
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {companyInfo.services.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
