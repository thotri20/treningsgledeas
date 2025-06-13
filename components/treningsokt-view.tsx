import { TreningsoktType } from "@/types/treningsokt.types";
export default function TreningsoktView({ session }: { session: TreningsoktType }) {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="font-bold text-lg mb-2">Treningsøkt</h2>
      <div>Dato: {session.date}</div>
      <div>Klokkeslett: {session.time}</div>
      <div>Sted: {session.locationType === "inne" ? "Inne" : "Ute"}</div>
      <div>Ledige plasser: {session.availableSpots}</div>
      {session.weather && <div>Vær: {session.weather}</div>}
    </div>
  );
}