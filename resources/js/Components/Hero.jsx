import { Link } from "@inertiajs/react";

export default function Hero(params) {
    return (
        <div className="flex flex-col gap-4 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://images.unsplash.com/photo-1571738318198-fda6afce5348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-3xl font-bold">
                        Selamat datang di Sistem Informasi Gunung Merapi Jawa
                        Timur!
                    </h1>
                    <p className="py-6">
                        Kami hadir untuk memberikan informasi mendalam mengenai
                        gunung berapi yang terdapat di Jawa Timur. Dengan Sistem
                        Informasi ini, Anda akan memperoleh pemahaman yang lebih
                        baik tentang karakteristik, aktivitas, dan potensi
                        bahaya dari gunung berapi di wilayah ini.
                    </p>
                    <Link
                        href={route("peta.index")}
                        className="btn btn-primary"
                    >
                        Jelajahi Peta
                    </Link>
                </div>
            </div>

            <div
                className="hero rounded-md"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1571967260643-8c677cf925df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60 rounded-md"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Gunung Berapi Jawa Timur: Informasi Terkini dan Keselamatan</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
