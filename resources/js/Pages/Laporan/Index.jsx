import HomeLayout from "@/Layouts/HomeLayout";
import AddIcon from "@mui/icons-material/Add";
import InputModal from "./Components/InputModal";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export default function Index() {
    const [count, setCount] = useState(30);

    const handleRowsCount = (e) => {
        setCount(e.target.value);
        console.log(e.target.value);
    };
    return (
        <HomeLayout>
            <div className="mt-24 max-w-7xl mx-auto w-full px-4 py-2">
                <div className="flex justify-between items-center my-2">
                    <h1 className="text-xl font-bold">Data Laporan Bencana</h1>
                    <div className="flex items-center gap-4">
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
                        <Tooltip title={"Tambah Data"}>
                            <label
                                htmlFor="my-modal-bencana"
                                className="btn btn-sm btn-primary text-white"
                            >
                                <AddIcon />
                            </label>
                        </Tooltip>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Lokasi</th>
                                <th>Posisi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <InputModal />
        </HomeLayout>
    );
}
