import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home({ children }) {
    return (
        <div className="bg-base-100" data-theme="light">
            <Navbar />
            <div className="max-w-7xl flex flex-col mx-auto p-8 min-h-screen">{children}</div>
            <Footer/>
        </div>
    );
}
