"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { TreningsoktType } from "@/types/treningsokt.types";

type Props = {
  session: TreningsoktType;
};

export default function TreningsoktView({ session }: Props) {
  const { isSignedIn } = useUser();
  const [signedUp, setSignedUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [availableSpots, setAvailableSpots] = useState(session.availableSpots);

  useEffect(() => {
    const key = `treningsokt_${session._id}_signedUp`;
    const stored = localStorage.getItem(key);
    if (stored) setSignedUp(JSON.parse(stored));
  }, [session._id]);

  // Update availableSpots if session prop changes (e.g. after page reload)
  useEffect(() => {
    setAvailableSpots(session.availableSpots);
  }, [session.availableSpots]);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/treningsokt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: session._id, action: signedUp ? "leave" : "join" }),
      });
      await res.json();
      if (res.ok) {
        setSignedUp(!signedUp);
        // Update availableSpots locally for instant feedback
        setAvailableSpots((prev) => prev + (signedUp ? 1 : -1));
        const key = `treningsokt_${session._id}_signedUp`;
        localStorage.setItem(key, JSON.stringify(!signedUp));
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