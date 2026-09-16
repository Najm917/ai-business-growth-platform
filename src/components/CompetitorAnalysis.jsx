import React, { useState } from "react";

export default function CompetitorAnalysis() {
  const [competitorInput, setCompetitorInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!competitorInput) return;
    setLoading(true);

    setTimeout(() => {
      setAnalysisResult({
        competitor: competitorInput,
        gapsFound: [
          "Competitor lacks direct WhatsApp booking/ordering.",
          "Slow page load speed on mobile devices.",
          "No automated customer review display on their landing page.",
        ],
        recommendedFeatures: [
          "Add 1-Click Instant Inquiry Button for faster conversion.",
          "Integrate AI Product Recommender to boost average order value.",
          "Launch an Automated SMS/WhatsApp Retargeting Campaign.",
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 sm:p-8 bg-transparent backdrop-blur-md rounded-2xl shadow-md border border-blue-300 transition-colors space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1">
          4. AI Competitor Analysis & Trend Recommender
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Stay ahead in your local market by analyzing competitor gaps and
          adopting modern tech trends.
        </p>
      </div>

      <form
        onSubmit={handleAnalyze}
        className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6"
      >
        <input
          type="text"
          required
          placeholder="Enter Competitor Name or Website URL"
          value={competitorInput}
          onChange={(e) => setCompetitorInput(e.target.value)}
          className="flex-1 p-3 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm whitespace-nowrap shadow-md"
        >
          {loading ? "Analyzing..." : "Analyze Competitor 🔍"}
        </button>
      </form>

      {analysisResult && (
        <div className="bg-purple-50/70 dark:bg-purple-950/30 p-5 sm:p-6 rounded-xl border border-purple-200 dark:border-purple-800/50 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center text-sm">
              ⚠️ Weaknesses Identified in {analysisResult.competitor}:
            </h3>
            <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
              {analysisResult.gapsFound.map((gap, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  {gap}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center text-sm">
              🚀 Recommended Features to Beat Them:
            </h3>
            <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
              {analysisResult.recommendedFeatures.map((rec, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
