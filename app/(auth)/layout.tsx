import { ClerkProvider } from "@clerk/nextjs";

type Props = {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return(
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}