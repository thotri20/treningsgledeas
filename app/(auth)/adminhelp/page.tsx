import Header from "@/components/header"
import Image from "next/image"
export default async function Page() {
    return(
        <div>
            <Header />
            <div>
                <h1 className="text-2xl font-bold text-purple-800 text-center mt-4">
                    Hvordan legge til treningsøkter
                </h1>
                <div className="text-center mt-4">
                <p>
                    Steg 1: I nettadressen bytt /adminhelp til /studio for å komme til sanity studio.
                </p>
                <p>
                    Steg 2: Logg inn med brukernavn og passord.
                </p>
                <p>
                    Steg 3: Klikk på "Treningsøkter" i menyen til venstre.
                </p>
                <p>
                    Steg 4: Klikk på pluss symbolet ovenfor listen med treningsøkter.
                </p>
                <p>
                    Steg 5: Fyll ut skjemaet med informasjon om treningsøkten, inkludert dato, tid, sted og vær.
                </p>
                <p>
                    Steg 6: Klikk på "Publiser" knappen for å lagre treningsøkten.
                </p>
                </div>
            </div>
        </div>
    )
}