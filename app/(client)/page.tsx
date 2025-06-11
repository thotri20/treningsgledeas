import Image from "next/image";
import { homepagequery } from "@/query/homepage.query";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";

export default async function Home() {
  const data = await sanityFetch({
    query: homepagequery,
  });
  return (
    <div>
      {" "}
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}{" "}
        <section className="bg-gradient-to-r from-purple-400 to-purple-800 text-white py-20 px-6 text-center">
          {" "}
          <h1 className="text-5xl font-bold mb-4">Ekte Treningsglede</h1>{" "}
          <p className="text-xl mb-6">
            Opplev den ultimate trenings opplevelsen i dag
          </p>{" "}
         <Link href="plans">
          <button className="bg-white text-teal-400 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Kom Igang{" "}
          </button>{" "}
          </Link>
        </section>
        {/* Features */}{" "}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          {" "}
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Hvorfor Velge Oss
          </h2>{" "}
          <div className="grid md:grid-cols-3 gap-8">
            {" "}
            {[
              {
                title: "Moderne Treningsenter",
                desc: "Alt av de beste og moderne utsyr for å det beste ut av din trening",
              },
              {
                title: "Ekspert Trenere",
                desc: "Sertifiserte trener for å motivere og hjelpe deg.",
              },
              {
                title: "24/7 Tilgang",
                desc: "Tren når du vil hos våre treningsentere",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                {" "}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>
        {/* Testimonials */}{" "}
        <section className="bg-white py-16 px-6">
          {" "}
          <h2 className="text-3xl text-purple-800 font-bold text-center mb-12">
            Hva Sier Våre Medlemmer
          </h2>{" "}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {" "}
            {[
              {
                name: "Anna",
                quote:
                  "This program changed my life. I feel stronger and more confident!",
              },
              {
                name: "Lars",
                quote:
                  "The coaches are amazing and the workouts are fun and effective.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <p className="italic">"{t.quote}"</p>
                <p className="mt-4 font-semibold">– {t.name}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>
        {/* Footer */}{" "}
        <footer className="bg-gray-800 text-white py-8 text-center">
          {" "}
          <p>&copy; {new Date().getFullYear()} Treningsglede AS. All rights reserved.</p>
        </footer>{" "}
      </div>
    </div>
  );
}
