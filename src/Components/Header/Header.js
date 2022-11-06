import React from "react";
import logo from "../../Asset/Logo.svg";
import { AiOutlineHome, AiOutlineDotChart } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="w-full h-[15%] min-h-[80px] p-4  bg-slate-600 flex flex-cols-3 content-center justify-between  text-white shadow-xl">
      <div className="flex items-center text-[36px] font-bold w-[10%]">
        <img src={logo} className="h-10 w-10 mr-2.5 pointer-events-none " />
        <h1>
          TR<span className="text-[#00bbff]">AI</span>CK
        </h1>
      </div>
      <div className="flex items-center cursor-pointer text-md gap-x-8 w-[75%] ">
        <button className="flex p-1 items-center justify-center gap-x-2 hover:bg-slate-400  hover:rounded-lg">
          <AiOutlineHome size={20} />
          <h3>Ana Sayfa</h3>
        </button>
        <button className="flex p-1 items-center justify-center gap-x-2  hover:bg-slate-400  hover:rounded-lg">
          <AiOutlineDotChart size={20} />
          <h3>Tahlil Sonuçlarım</h3>
        </button>
      </div>
      <button className=" w-[10%] h-fit p-1 text-center border rounded-md bg-slate-400 border-gray-600  hover:bg-gray-600 ">
        Kullanıcı Adı
      </button>
    </div>
  );
};
