import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home({ children }) {
    return (
        <div className="bg-base-100" data-theme="light">
            <Navbar />
            <div className="flex flex-col min-h-screen">{children}</div>
        </div>
    );
}
