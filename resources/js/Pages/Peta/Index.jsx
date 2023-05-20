import HomeLayout from "@/Layouts/HomeLayout";
import DragDrop from "./Components/DragDrop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router, usePage } from "@inertiajs/react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import InputModal from "./Components/InputModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { Tooltip } from "@mui/material";

export default function Index({ gunung, wilayah }) {
    const { flash } = usePage().props;

    const submit = (id) => {
        router.delete(route("peta.destroy", id));
    };

    useEffect(() => {
        flash.message &&
            toast.success(flash.message, {
                position: "top-right",
                autoClose: 2000,
                pauseOnHover: false,
            });
    }, [flash]);

    return (
        <HomeLayout>
            <div className="mt-24 max-w-[90rem] mx-auto w-full p-4">
                <div className="flex justify-between items-center">
                    <h2 className="my-2 font-bold">Data Gunung Jawa Timur</h2>
                    <Tooltip title={"Tambah Data"}>
                        <label
                            htmlFor="my-modal-input"
                            className="btn btn-sm btn-primary text-white"
                        >
                            <AddIcon />
                        </label>
                    </Tooltip>
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
                                            <Tooltip title={"Edit Data"}>
                                                <label
                                                    htmlFor={`my-modal-${item.id}`}
                                                    className="btn btn-sm btn-warning mr-2"
                                                >
                                                    <EditIcon />
                                                </label>
                                            </Tooltip>
                                            <Tooltip title={"Hapus Data"}>
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
                                            </Tooltip>
                                        </div>
                                    </td>
                                    <DragDrop
                                        wilayah={wilayah}
                                        item={item}
                                        id={item.id}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <InputModal wilayah={wilayah} />
            <ToastContainer />
        </HomeLayout>
    );
}
