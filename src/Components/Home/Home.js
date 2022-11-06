import { AiOutlineUpload, AiOutlineLoading3Quarters } from "react-icons/ai";
import React from "react";
import { useState } from "react";

export const Home = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Traick");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsfbibgxq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="flex p-4 h-full text-white">
      <div className=" flex-1 w-[25%] min-w-[25%] max-h-[372px]  grid gap-y-5 ">
        <h1 className=" text-xl">Başlık</h1>
        <div className="w-[350px] h-[180px] rounded-2xl bg-slate-400  p-8">
          <div className="flex  items-center  pt-8  gap-x-4">
            <button className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-slate-800 rounded-full p-2 shrink-0">
                <AiOutlineUpload size={32} />
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  onChange={uploadImage}
                  className="block w-full text-sm text-white
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-slate-400
                        hover:file:bg-violet-100"
                />
              </label>
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[80px] rounded-2xl bg-slate-400 mt-3  justify-center">
          <p className="font-semibold text-xl  p-5 text-center"> Lorem Ipsum</p>
        </div>
      </div>
      <div>
        <div className=" flex-1 justify-center items-center w-full h-full   ">
          <div className="flex justify-center items-center">
            {loading ? (
              <AiOutlineLoading3Quarters size={36} className="animate-spin" />
            ) : (
              <img src={image} className="   object-center " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
