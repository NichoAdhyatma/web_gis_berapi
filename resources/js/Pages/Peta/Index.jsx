import HomeLayout from "@/Layouts/HomeLayout";
import DragDrop from "./Components/DragDrop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePage } from "@inertiajs/react";

export default function Index({ gunung }) {
    const { flash } = usePage().props;
    return (
        <HomeLayout>
            <div className="mt-24 max-w-7xl mx-auto w-full">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Lokasi</th>
                                <th>Posisi</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gunung.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.lokasi}</td>
                                    <td>{item.position}</td>
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
                                        <label
                                            htmlFor={`my-modal-${item.id}`}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Upload Gambar
                                        </label>
                                    </td>
                                    <input
                                        type="checkbox"
                                        id={`my-modal-${item.id}`}
                                        className="modal-toggle"
                                    />
                                    <DragDrop id={item.id} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {flash.message &&
                toast.success(flash.message, {
                    autoClose: 3000,
                    pauseOnHover: false,
                })}

            <ToastContainer />
        </HomeLayout>
    );
}
