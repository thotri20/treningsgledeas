import TreningsoktView from "@/components/treningsokt-view";
import { client } from "@/sanity/lib/client";
import { allTreningsokterQuery } from "@/query/treningsokt.query";
import { TreningsoktType } from "@/types/treningsokt.types";
import Header from "@/components/header";

export default async function TreningsoktPage() {
  const treningsokter: TreningsoktType[] = await client.fetch(
    allTreningsokterQuery
  );

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Treningsøkter</h1>
        {treningsokter.map((session) => (
          <TreningsoktView key={session._id} session={session} />
        ))}
      </div>
    </div>
  );
}
