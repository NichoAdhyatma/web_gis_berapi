import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ClipLoader from "react-spinners/ClipLoader";
import Collapse from "@mui/material/Collapse";
import DeleteIcon from "@mui/icons-material/Delete";
import { router } from "@inertiajs/react";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ id }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (file) => {
        setLoading(true);
        setTimeout(() => {
            setFile(file);
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
    };

    const submit = (e) => {
        e.preventDefault();

        router.post(route("peta.update", id), {
            _method: "patch",
            photo: file,
        });

        handleDeleteFile();
        document.getElementById(`my-modal-${id}`).checked = false;
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
                    <h3 className="text-lg font-bold">Upload Gambar Gunung</h3>
                    <div className="p-4">
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            label="Upload atau arahkan gambar mu disini"
                            multiple={false}
                        />

                        <div className="my-4">
                            <ClipLoader
                                color="#1D267D"
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>

                        <Collapse in={file != null}>
                            {file != null && (
                                <div className="mt-4 shadow p-4 flex items-center gap-4 rounded-md">
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
                                    className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-500 my-2"
                                >
                                    <DeleteIcon />
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary my-4"
                                    onClick={submit}
                                >
                                    Upload
                                </button>
                            </div>
                        </Collapse>
                    </div>
                </label>
            </label>
        </>
    );
}

export default DragDrop;
