import HomeLayout from "@/Layouts/HomeLayout";
import DragDrop from "./Components/DragDrop";

export default function Index({ gunung }) {
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
                                            htmlFor="my-modal-4"
                                            className="btn btn-sm btn-warning"
                                        >
                                            Upload Gambar
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Upload Gambar Gunung</h3>
                    <div className="p-4">
                        <DragDrop />
                    </div>
                </label>
            </label>
        </HomeLayout>
    );
}
