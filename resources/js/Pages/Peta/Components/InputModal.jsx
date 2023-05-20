import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function InputModal({ wilayah }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lokasi: "",
        position: "",
        status: null,
        ketinggian: null,
        deskripsi: "",
    });

    const modalRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();

        post(route("peta.store"), {
            onSuccess: () => {
                reset();
            },
        });
        modalRef.current.checked = false;
    };
    return (
        <>
            <input
                ref={modalRef}
                type="checkbox"
                id="my-modal-input"
                className="modal-toggle"
            />
            <label htmlFor="my-modal-input" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Form Tambah Data</h3>
                    <form
                        onSubmit={submit}
                        className="my-4 flex flex-col gap-4 w-full"
                    >
                        <div>
                            <InputLabel htmlFor="name" value="Nama Gunung" />

                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                className="input input-bordered focus:border-blue-500 focus:outline-blue-500 mt-1 w-full"
                                autoComplete="Nama Gunung"
                                placeholder="Nama Gunung"
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
                            <InputLabel htmlFor="lokasi" value="Lokasi" />
                            <select
                                id="lokasi"
                                name="lokasi"
                                placeholder="Pilih lokasi"
                                className="select select-bordered  focus:border-blue-500 focus:outline-blue-500 w-full"
                                onChange={(e) =>
                                    setData("lokasi", e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pilih lokasi
                                </option>
                                {wilayah.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))}
                            </select>

                            <InputError
                                message={errors.lokasi}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="position"
                                value="Posisi Koordinat"
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

                        <div>
                            <InputLabel
                                htmlFor="status"
                                value="Status Gunung"
                            />
                            <select
                                id="status"
                                name="status"
                                placeholder="Pilih Status"
                                className="select select-bordered  focus:border-blue-500 focus:outline-blue-500 w-full"
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Status
                                </option>
                                <option
                                    value={1}
                                    className="badge badge-success bg-yellow-200 p-4 font-bold text-yellow-700"
                                >
                                    Aktif
                                </option>
                                <option
                                    value={0}
                                    className="badge badge-success bg-green-200 p-4 font-bold text-green-700"
                                >
                                    Tidak Aktif
                                </option>
                            </select>

                            <InputError
                                message={errors.lokasi}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="ketinggian"
                                value="Ketinggian (mdpl)"
                            />

                            <input
                                id="ketinggian"
                                type="number"
                                name="ketinggian"
                                value={data.ketinggian}
                                className="input input-bordered focus:border-blue-500 focus:outline-blue-500 mt-1 w-full"
                                autoComplete="Tinggi Gunung"
                                placeholder="Tinggi Gunung"
                                onChange={(e) =>
                                    setData("ketinggian", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.ketinggian}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="deskripsi" value="Deskripsi" />

                            <textarea
                                id="deskripsi"
                                className="textarea textarea-bordered w-full focus:border-blue-500 focus:outline-blue-500"
                                name="deskripsi"
                                value={data.deskripsi}
                                placeholder="Deskripsi"
                                autoComplete="Deskripsi"
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                            ></textarea>

                            <InputError
                                message={errors.deskripsi}
                                className="mt-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            disabled={processing}
                        >
                            Tambah
                        </button>
                    </form>
                </label>
            </label>
        </>
    );
}
