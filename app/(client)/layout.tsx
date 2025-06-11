import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

type Props = {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
    return(
        <ClerkProvider>
            <Header />
            {children}
        </ClerkProvider>
    )
}