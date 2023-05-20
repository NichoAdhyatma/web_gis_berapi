import HomeLayout from "@/Layouts/HomeLayout";
import DragDrop from "./Components/DragDrop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router, usePage } from "@inertiajs/react";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import InputModal from "./Components/InputModal";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Index({ gunung, wilayah }) {
    const { flash } = usePage().props;

    const submit = (id) => {
        router.delete(route("peta.destroy", id));
    };

    return (
        <HomeLayout>
            <div className="mt-24 max-w-[90rem] mx-auto w-full p-4">
                <div className="flex justify-between items-center">
                    <h2 className="my-2 font-bold">Data Gunung Jawa Timur</h2>
                    <label
                        htmlFor="my-modal-input"
                        className="btn btn-sm bg-blue-500 hover:bg-blue-500 border-none text-white flex items-center gap-2"
                    >
                        <AddIcon /> Tambah Data
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Gambar</th>
                                <th>Name</th>
                                <th>Lokasi</th>

                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gunung.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img
                                            src={`/storage/${item.photo}`}
                                            alt={item.photo}
                                            className="w-12"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.lokasi}</td>
                                    <td>
                                        {item.status ? (
                                            <div className="badge badge-success bg-yellow-200 p-4">
                                                <p className="font-bold text-yellow-700">
                                                    Aktif
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="badge badge-success bg-green-200 p-4">
                                                <p className="font-bold text-green-700">
                                                    Tidak Aktif
                                                </p>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        <div>
                                            <label
                                                htmlFor={`my-modal-${item.id}`}
                                                className="btn btn-sm btn-warning mr-2"
                                            >
                                                <FileUploadIcon />
                                            </label>
                                            <button
                                                onClick={() =>
                                                    confirm("Mau di hapus")
                                                        ? submit(item.id)
                                                        : null
                                                }
                                                className="btn btn-sm btn-error"
                                            >
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </td>
                                    <DragDrop id={item.id} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {flash.message &&
                toast.success(flash.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                })}
            <InputModal wilayah={wilayah} />
            <ToastContainer />
        </HomeLayout>
    );
}
