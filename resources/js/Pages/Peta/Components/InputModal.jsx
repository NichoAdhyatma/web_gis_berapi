import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";
import Collapse from "@mui/material/Collapse";
import { useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ClipLoader from "react-spinners/ClipLoader";
import DeleteIcon from "@mui/icons-material/Delete";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function InputModal({ wilayah }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lokasi: "",
        position: "",
        status: null,
        ketinggian: "",
        deskripsi: "",
        photo: null,
    });

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

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

    const handleChange = (file) => {
        setLoading(true);
        setTimeout(() => {
            setFile(file);
            setData("photo", file);
            setLoading(false);
        }, 500);
    };

    function formatFileSize(fileSizeBytes, decimalPlaces) {
        var mb = fileSizeBytes / (1024 * 1024);
        var formattedSize = mb.toFixed(decimalPlaces) + " MB";
        return formattedSize;
    }

    const handleDeleteFile = () => {
        setFile(null);
        setData("photo", null);
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
                        className="my-4 flex flex-col gap-2 w-full"
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
                                message={errors.status}
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

                        <InputLabel value="Gambar" />

                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            label="Upload atau arahkan gambar mu disini"
                            multiple={false}
                        />

                        <ClipLoader
                            color="#1D267D"
                            loading={loading}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />

                        <Collapse in={file != null}>
                            {file != null && (
                                <div className="mt-2 shadow p-4 flex items-center gap-4 rounded-md">
                                    <img
                                        className="w-12 rounded-sm"
                                        src={URL.createObjectURL(file)}
                                    />
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <h1 className="text-lg font-bold">
                                                {file.name}
                                            </h1>
                                            <p className="text-sm font-thin">
                                                {file.type}
                                            </p>
                                        </div>
                                        <p className="text-blue-500 font-semibold">
                                            {formatFileSize(file.size, 2)}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col items-end w-full">
                                <button
                                    type="button"
                                    onClick={handleDeleteFile}
                                    className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-500 mt-2"
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </Collapse>

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
