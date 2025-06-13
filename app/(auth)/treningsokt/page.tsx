import TreningsoktView from "@/components/treningsokt-view";
import { client } from "@/sanity/lib/client";
import { allTreningsokterQuery } from "@/query/treningsokt.query";
import { TreningsoktType } from "@/types/treningsokt.types";
import Header from "@/components/header";

export default async function TreningsoktPage() {
  const treningsokter: TreningsoktType[] = await client.fetch(allTreningsokterQuery);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-purple-800 mb-4">Treningsøkter</h1>
          {treningsokter.map((session) => (
            <TreningsoktView key={session._id} session={session} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Treningsglede AS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}