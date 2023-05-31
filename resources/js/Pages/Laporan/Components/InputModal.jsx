import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function InputModal() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        posisi: "",
        level: "",
        deskripsi: "",
    });

    const modalRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();

        post(route("peta.store"), {
            onSuccess: () => {
                handleDeleteFile();
                modalRef.current.checked = false;
                reset();
            },
        });
    };

    return (
        <>
            <input
                type="checkbox"
                id="my-modal-bencana"
                className="modal-toggle"
            />
            <label htmlFor="my-modal-bencana" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Form Laporan Bencana</h3>
                    <form
                        onSubmit={submit}
                        className="my-4 flex flex-col gap-2 w-full"
                    >
                        <div>
                            <InputLabel htmlFor="name" value="Judul Laporan" />

                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                className="input input-bordered focus:border-blue-500 focus:outline-blue-500 mt-1 w-full"
                                placeholder="Judul Laporan"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="position"
                                value="Posisi Koordinat"
                            />

                            <input
                                type="checkbox"
                                id="my-modal-3"
                                className="modal-toggle"
                            />

                            <input
                                id="position"
                                name="position"
                                value={data.position}
                                className="input input-bordered focus:border-blue-500 focus:outline-blue-500 mt-1 w-full"
                                autoComplete="Posisi Gunung"
                                placeholder="Koordinat langltd"
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.position}
                                className="mt-2"
                            />
                        </div>
                    </form>
                </label>
            </label>
        </>
    );
}
