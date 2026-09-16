import React from "react";

export default function PricingSection() {
  const plans = [
    {
      title: "Starter Digital Setup",
      price: "₹14,999",
      description:
        "Best for small local businesses starting their online journey.",
      features: [
        "Responsive 5-Page Website (React/WordPress)",
        "Basic SEO & Google My Business Setup",
        "Direct WhatsApp Chat Integration",
        "Mobile-Friendly & High Loading Speed",
        "1 Year Free Domain & Hosting Support",
      ],
      recommended: false,
    },
    {
      title: "AI Growth Accelerator",
      price: "₹29,999",
      description: "Complete solution with AI features & marketing campaign.",
      features: [
        "Everything in Starter Plan",
        "AI Chatbot for Customer Support",
        "AI-Based Lead Generation Form",
        "Social Media & Meta Ads Setup",
        "Custom Performance Analytics Dashboard",
        "3 Months Maintenance Support",
      ],
      recommended: true,
    },
  ];

  const handleWhatsApp = (planName) => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      `Hi, I am interested in the ${planName} package for my business.`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="p-6 sm:p-8 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
          2. Transparent Pricing & Value Proposition
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          No hidden fees. Choose the right digital development & marketing
          package for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border flex flex-col justify-between transition-all ${
              plan.recommended
                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/50 shadow-lg relative bg-blue-50/40 dark:bg-blue-950/20"
                : "border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {plan.title}
              </h3>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 my-3">
                {plan.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {plan.description}
              </p>

              <hr className="mb-6 border-gray-200 dark:border-gray-700" />

              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                What's Included:
              </h4>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleWhatsApp(plan.title)}
              className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                plan.recommended
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white"
              }`}
            >
              <span>💬 Contact on WhatsApp</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
