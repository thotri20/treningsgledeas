"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { TreningsoktType } from "@/types/treningsokt.types";

type Props = {
  session: TreningsoktType;
};

export default function TreningsoktView({ session }: Props) {
  const { isSignedIn } = useUser();
  const [signedUp, setSignedUp] = useState(false);
  const [availableSpots, setAvailableSpots] = useState(session.availableSpots);
  const [loading, setLoading] = useState(false);

const handleSignup = async () => {
  setLoading(true);
  try {
    const res = await fetch("/api/treningsokt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: session._id, action: signedUp ? "leave" : "join" }),
    });
    const data = await res.json();
    console.log("API response:", data);
    if (res.ok) {
      setSignedUp(!signedUp);
      setAvailableSpots((prev) => prev + (signedUp ? 1 : -1));
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <h2 className="font-bold text-black text-lg mb-2">Treningsøkt</h2>
      <div>Dato: {session.date}</div>
      <div>Klokkeslett: {session.time}</div>
      <div>Sted: {session.locationType === "inne" ? "Inne" : "Ute"}</div>
      <div>Ledige plasser: {availableSpots}</div>
      {session.weather && <div>Vær: {session.weather}</div>}
      <button
        className={`mt-4 px-4 py-2 rounded transition ${
          !isSignedIn
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : signedUp
            ? "bg-gray-400 text-white"
            : "bg-purple-800 text-white hover:bg-teal-400"
        }`}
        disabled={!isSignedIn || loading}
        onClick={handleSignup}
      >
        {!isSignedIn
          ? "Logg inn for å melde deg på"
          : signedUp
          ? "Meld deg av treningsøkt"
          : "Meld deg på treningsøkt"}
      </button>
    </div>
  );
}