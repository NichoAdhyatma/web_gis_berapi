import Home from "@/Layouts/HomeLayout";

export default function ImagePreview({image}) {
  return (
    <Home>
    <img src={`/storage/${image}`} alt="" className="mt-24 w-96 mx-auto" />
    </Home>
  )
};
