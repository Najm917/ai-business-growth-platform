import React, { useState } from "react";

export default function ReferralProgram() {
  const [partnerDetails, setPartnerDetails] = useState({
    name: "",
    phone: "",
    city: "",
  });
  const [registered, setRegistered] = useState(false);

  const [userQuery, setUserQuery] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  const handleAskAI = (e) => {
    e.preventDefault();
    if (!userQuery) return;
    setAiLoading(true);

    setTimeout(() => {
      setAiAnswer(
        `💡 AI Partner Tip for "${userQuery}": Tell the client that having a website will bring them direct local orders without high commission fees. Share your referral link with them to get ₹1,000 credited automatically once they signup!`,
      );
      setAiLoading(false);
    }, 1200);
  };

  return (
    <div className="p-6 sm:p-8 bg-gray-600 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <div className="text-center mb-6">
        <span className="bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          Zero Educational Qualification Required
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mt-3 mb-1">
          3. Referral Partner Program
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Earn{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            ₹1,000 instantly
          </span>{" "}
          for every business owner you help connect with us!
        </p>
      </div>

      {!registered ? (
        <form
          onSubmit={handleRegister}
          className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4 max-w-lg mx-auto"
        >
          <h3 className="font-bold text-gray-700 dark:text-gray-200 text-center">
            Join as a Growth Partner Today
          </h3>
          <input
            type="text"
            required
            placeholder="Your Full Name"
            value={partnerDetails.name}
            onChange={(e) =>
              setPartnerDetails({ ...partnerDetails, name: e.target.value })
            }
            className="w-full p-2.5 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 dark:text-white"
          />
          <input
            type="tel"
            required
            placeholder="WhatsApp Phone Number"
            value={partnerDetails.phone}
            onChange={(e) =>
              setPartnerDetails({ ...partnerDetails, phone: e.target.value })
            }
            className="w-full p-2.5 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 dark:text-white"
          />
          <input
            type="text"
            required
            placeholder="Your City"
            value={partnerDetails.city}
            onChange={(e) =>
              setPartnerDetails({ ...partnerDetails, city: e.target.value })
            }
            className="w-full p-2.5 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-all text-sm"
          >
            Get My Partner Link & Start Earning ₹1,000
          </button>
        </form>
      ) : (
        <div className="bg-green-50 dark:bg-green-950/40 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center mb-6">
          <p className="text-green-800 dark:text-green-200 font-bold">
            🎉 Welcome aboard, {partnerDetails.name}!
          </p>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1 break-all">
            Your Partner Referral Link:{" "}
            <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">
              growthplatform.com/ref?partner={partnerDetails.phone}
            </code>
          </p>
        </div>
      )}

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 flex items-center">
          🤖 AI Partner Guidance & Sales Support
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Not sure how to pitch to a client? Ask the AI assistant below for
          instant scripts & tips.
        </p>

        <form
          onSubmit={handleAskAI}
          className="flex flex-col sm:flex-row gap-2 mb-4"
        >
          <input
            type="text"
            placeholder="e.g. How to convince a local saree shop owner?"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="flex-1 p-2.5 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            disabled={aiLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm shrink-0"
          >
            {aiLoading ? "Asking AI..." : "Ask AI"}
          </button>
        </form>

        {aiAnswer && (
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
            {aiAnswer}
          </div>
        )}
      </div>
    </div>
  );
}
