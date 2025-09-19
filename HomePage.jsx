import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-gradient bg-clip-text text-transparent from-green-400 to-blue-500">
        Welcome to VEROX Trader AI
      </h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-xl">
        Real-time trading signals, AI-assisted guidance, and learning charts – all in one platform.
      </p>
      
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => alert("AI Adviser coming soon!")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Open AI Adviser
        </button>
        
        <button
          onClick={() => alert("Learn Trading Section coming soon!")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Learn Trading
        </button>
      </div>

      <div className="mt-12 text-gray-400 text-sm text-center max-w-md">
        Note: Signals shown here are demo. Live trading features coming soon with API integration.
      </div>
    </div>
  );
}
