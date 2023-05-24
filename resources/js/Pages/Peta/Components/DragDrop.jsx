import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ClipLoader from "react-spinners/ClipLoader";
import Collapse from "@mui/material/Collapse";
import DeleteIcon from "@mui/icons-material/Delete";
import { router, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import LaunchIcon from "@mui/icons-material/Launch";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ wilayah, item, id }) {
    const [file, setFile] = useState(null);
    const [krb, setKrb] = useState(null);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const { data, setData, errors } = useForm({
        name: item.name,
        lokasi: item.lokasi,
        position: item.position,
        ketinggian: item.ketinggian,
        status: item.status,
        deskripsi: item.deskripsi,
        photo: null,
        krb: null,
    });

    const handleChange = (file) => {
        setLoading(true);
        setTimeout(() => {
            setFile(file);
            setData("photo", file);
            setLoading(false);
        }, 500);
    };

    const handleChangeKrb = (file) => {
        setLoading(true);
        setTimeout(() => {
            setKrb(file);
            setData("krb", file);
            setLoading(false);
        }, 500);
    };

    function formatFileSize(fileSizeBytes, decimalPlaces) {
        var mb = fileSizeBytes / (1024 * 1024);
        var formattedSize = mb.toFixed(decimalPlaces) + " MB";
        return formattedSize;
    }

    const handleDeleteFile = (type) => {
        if (type === "all") {
            setFile(null);
            setKrb(null);
            setData("krb", null);
            setData("photo", null);
        } else if (type === "krb") {
            setKrb(null);
            setData("krb", null);
        } else {
            setFile(null);
            setData("photo", null);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(
            route("peta.update", id),
            {
                _method: "patch",
                name: data.name,
                lokasi: data.lokasi,
                position: data.position,
                ketinggian: data.ketinggian,
                status: data.status,
                deskripsi: data.deskripsi,
                photo: data.photo,
                krb: data.krb,
            },
            {
                onSuccess: () => {
                    handleDeleteFile("all");
                    setProcessing(false);
                    document.getElementById(`my-modal-${id}`).checked = false;
                },
            }
        );
    };

    return (
        <>
            <input
                type="checkbox"
                id={`my-modal-${id}`}
                className="modal-toggle"
            />

            <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Form Edit Data</h3>

                    <form onSubmit={submit} className="flex flex-col gap-2">
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
                                {wilayah.map((place, index) => {
                                    return (
                                        <option
                                            key={index}
                                            selected={
                                                place.name === data.lokasi
                                            }
                                        >
                                            {place.name}
                                        </option>
                                    );
                                })}
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
                                    selected={data.status == true}
                                >
                                    Aktif
                                </option>
                                <option
                                    value={0}
                                    className="badge badge-success bg-green-200 p-4 font-bold text-green-700"
                                    selected={data.status == false}
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

                        <div className="flex gap-2 items-center">
                            <InputLabel value="Gambar" />
                            <a target="_blank" href={`/storage/${item.photo}`}>
                                <LaunchIcon fontSize="12" />
                            </a>
                        </div>

                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            label="Upload atau arahkan gambar mu disini"
                            multiple={false}
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
                                    onClick={() => handleDeleteFile("gambar")}
                                    className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-500 mt-2"
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </Collapse>

                        <div className="flex gap-2 items-center">
                            <InputLabel value="KRB" />
                            <a target="_blank" href={`/storage/${item.krb}`}>
                                <LaunchIcon fontSize="12" />
                            </a>
                        </div>

                        <FileUploader
                            handleChange={handleChangeKrb}
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

                        <Collapse in={krb != null}>
                            {krb != null && (
                                <div className="mt-2 shadow p-4 flex items-center gap-4 rounded-md">
                                    <img
                                        className="w-12 rounded-sm"
                                        src={URL.createObjectURL(krb)}
                                    />
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <h1 className="text-lg font-bold">
                                                {krb.name}
                                            </h1>
                                            <p className="text-sm font-thin">
                                                {krb.type}
                                            </p>
                                        </div>
                                        <p className="text-blue-500 font-semibold">
                                            {formatFileSize(krb.size, 2)}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col items-end w-full">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteFile("krb")}
                                    className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-500 mt-2"
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </Collapse>

                        <button
                            type="submit"
                            className="btn btn-sm btn-primary mt-2"
                            disabled={processing}
                        >
                            Edit
                        </button>
                    </form>
                </label>
            </label>
        </>
    );
}

export default DragDrop;
