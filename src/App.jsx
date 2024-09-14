import React, { useState } from "react";
import "./index.css";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

function App() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAirdrop = async () => {
    setLoading(true);
    setError("");

    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const publicKey = new PublicKey(address);

      const airdropSignature = await connection.requestAirdrop(
        publicKey,
        2 * LAMPORTS_PER_SOL
      );

      await connection.confirmTransaction(airdropSignature);
      setLoading(false);
      alert("Airdrop successful!"); // Simple alert instead of modal
    } catch (err) {
      setLoading(false);
      setError("Invalid Address or Airdrop Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white animated-bg">
      <img
        src="../public/Solana_logo.png"
        alt="Solana Logo"
        className="mb-8 w-40"
      />
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg w-96 backdrop-filter backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-4">Request Airdrop</h2>
        <p className="text-sm text-gray-400 mb-4">
          Maximum of 2 requests per hour
        </p>
        <input
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded text-white placeholder-gray-500"
          type="text"
          placeholder="Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 mb-4 bg-gray-700 rounded text-white placeholder-gray-500"
          type="text"
          placeholder="Amount"
          disabled
          value="2 SOL"
        />
        <button
          className={`w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold flex items-center justify-center ${
            loading && "opacity-50"
          }`}
          onClick={handleAirdrop}
          disabled={loading}
        >
          {loading ? (
            "Processing..."
          ) : (
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Confirm Airdrop
            </>
          )}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default App;
