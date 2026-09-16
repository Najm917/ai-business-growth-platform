import React, { useState } from "react";

export default function PainPointForm() {
  const [formData, setFormData] = useState({
    businessType: "",
    location: "",
    challenge: "",
  });

  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setReport(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      setError("API Key not found! Please check your .env file.");
      setLoading(false);
      return;
    }

    const prompt = `Act as a Digital Growth Consultant. Business owner details:
- Business Type: ${formData.businessType}
- Location: ${formData.location}
- Major Business Challenge: ${formData.challenge}

Provide 3 clear, practical actionable strategies in short paragraphs:
1. Website Strategy
2. Digital Marketing Plan
3. Quick Growth Hack`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        },
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setReport(data.candidates[0].content.parts[0].text);
      } else {
        setError("Failed to generate report from AI. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Error connecting to Gemini API. Check your network or API key.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
        1. AI-Driven Business Pain-Point Analysis
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
        Enter your business details below to generate a real-time customized AI
        digital growth report.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Business Type / Niche
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Saree Shop, Cafe, Boutique"
            value={formData.businessType}
            onChange={(e) =>
              setFormData({ ...formData, businessType: e.target.value })
            }
            className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            City / Location
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Patna, Delhi, Bangalore"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Biggest Business Challenge / Pain Point
          </label>
          <textarea
            required
            rows="3"
            placeholder="e.g. Not getting enough walk-in customers..."
            value={formData.challenge}
            onChange={(e) =>
              setFormData({ ...formData, challenge: e.target.value })
            }
            className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md active:scale-[0.99]"
        >
          {loading
            ? "Generating Live AI Recommendations..."
            : "Generate AI Growth Report ✨"}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 text-sm">
          {error}
        </div>
      )}

      {report && (
        <div className="mt-8 p-5 sm:p-6 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800/60">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">
            📊 Live AI Growth Recommendations
          </h3>
          <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed text-sm">
            {report}
          </div>
        </div>
      )}
    </div>
  );
}
