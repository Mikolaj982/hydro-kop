import { Footer } from "@/components/layout/Footer/Footer";
import Nav from "@/components/layout/Nav/Nav";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}