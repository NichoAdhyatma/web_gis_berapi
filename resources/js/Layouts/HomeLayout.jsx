import Navbar from "@/Components/Navbar";

export default function Home({ children }) {
    return (
        <div className="min-h-full">
            <Navbar />
            <div className="max-w-7xl flex flex-col mx-auto mt-24 p-8">{children}</div>
        </div>
    );
}
