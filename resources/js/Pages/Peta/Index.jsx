import HomeLayout from "@/Layouts/HomeLayout";
import DragDrop from "./Components/DragDrop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, router, usePage } from "@inertiajs/react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import InputModal from "./Components/InputModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export default function Index({ gunung, wilayah }) {
    const { flash } = usePage().props;

    const submit = (id) => {
        router.delete(route("peta.destroy", id));
    };

    const [search, setSearch] = useState("");
    const [count, setCount] = useState(30);
    const [data, setData] = useState({ id: '', data: '' });

    useEffect(() => {
        flash.message &&
            toast.success(flash.message, {
                position: "top-right",
                autoClose: 2000,
                pauseOnHover: false,
            });
    }, [flash]);

    const handleOnChange = (e) => {
        setCount(30);
        setSearch(e.target.value);
    };

    const handleRowsCount = (e) => {
        setCount(e.target.value);
        console.log(e.target.value);
    };

    return (
        <HomeLayout>
            <div className="mt-24 max-w-7xl mx-auto w-full px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <input
                            onChange={handleOnChange}
                            type="text"
                            placeholder="Cari Data Gunung Disini"
                            className="input input-bordered w-full max-w-lg my-2"
                        />
                        <select
                            className="select select-bordered w-40 max-w-lg"
                            onChange={handleRowsCount}
                            defaultValue={count}
                        >
                            <option value={count} disabled>
                                Row Per Page
                            </option>
                            <option value={5} selected={count == 5}>
                                5
                            </option>
                            <option value={10} selected={count == 10}>
                                10
                            </option>
                            <option value={20} selected={count == 20}>
                                20
                            </option>
                            <option value={30} selected={count == 30}>
                                30
                            </option>
                        </select>
                    </div>
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
                            {gunung.data.map((item, index) => {
                                return item.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) &&
                                    index + 1 <= count ? (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={`/storage/${item.photo}`}
                                            >
                                                <img
                                                    src={`/storage/${item.photo}`}
                                                    alt={item.photo}
                                                    className="w-12"
                                                />
                                            </a>
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
                                                        onClick={() =>
                                                            setData((data) => ({
                                                                ...data,
                                                                ...{
                                                                    id: item.id,
                                                                    data: item,
                                                                },
                                                            }))
                                                        }
                                                    >
                                                        <EditIcon />
                                                    </label>
                                                </Tooltip>
                                                <Tooltip title={"Hapus Data"}>
                                                    <button
                                                        onClick={() =>
                                                            confirm(
                                                                "Mau di hapus"
                                                            )
                                                                ? submit(
                                                                      item.id
                                                                  )
                                                                : null
                                                        }
                                                        className="btn btn-sm btn-error"
                                                    >
                                                        <DeleteIcon />
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </td>
                                    </tr>
                                ) : null;
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="btn-group flex gap-2 mt-2">
                    {gunung.links.map((link, index) => (
                        <Link key={index} href={link.url}>
                            <button
                                className={`btn btn-sm bg-base-200 text-base-content hover:bg-base-100 border-none ${
                                    link.active
                                        ? `bg-primary !text-white hover:bg-primary`
                                        : null
                                }`}
                            >
                                {index == 0
                                    ? "<"
                                    : index == gunung.last_page + 1
                                    ? ">"
                                    : link.label}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            <DragDrop wilayah={wilayah} item={data.data} id={data.id} />

            <InputModal wilayah={wilayah} />
            <ToastContainer />
        </HomeLayout>
    );
}
