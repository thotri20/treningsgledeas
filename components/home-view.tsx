import { Homepage } from "@/types/hompage.types";

export default function HomeView({ data }: { data: Homepage }) {
    return(
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}