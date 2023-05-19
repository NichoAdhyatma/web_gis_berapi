import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ClipLoader from "react-spinners/ClipLoader";
// import CloseIcon from "@mui/icons-material/Close";
import { Collapse } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [show, setShow] = useState(false);
    const handleChange = (file) => {
        setLoading(true);
        setTimeout(() => {
            setFile(file);
            setLoading(false);
            setShow(true);
        }, 1000);
    };

    function formatFileSize(fileSizeBytes, decimalPlaces) {
        var mb = fileSizeBytes / (1024 * 1024);
        var formattedSize = mb.toFixed(decimalPlaces) + " MB";
        return formattedSize;
    }

    const handleDeleteFile = () => {
        setFile(null);
    };

    return (
        <>
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

            {/* <Collapse in={show}>
                <div class="alert alert-success shadow-lg my-4">
                    <div className="flex gap-4 justify-between w-full">
                        <div className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Upload berhasil</span>
                        </div>
                        <button onClick={handleClose}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            </Collapse> */}

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
                                <p className="text-sm font-thin">{file.type}</p>
                            </div>
                            <p className="text-blue-500 font-semibold">
                                {formatFileSize(file.size, 2)}
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col items-end w-full">
                    <button onClick={handleDeleteFile} className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-500 my-2">
                        <DeleteIcon />
                    </button>
                    <button
                        
                        className="btn btn-sm btn-primary my-4"
                    >
                        Upload
                    </button>
                </div>
            </Collapse>
        </>
    );
}

export default DragDrop;
