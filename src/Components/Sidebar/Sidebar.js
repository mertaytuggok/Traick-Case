import React from "react";
import { AiOutlineUpload, AiOutlineAppstore } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <div className="w-[5%] h-[75%] min-h-[843px] grid grid-rows-1 place-content-center  bg-slate-900   text-white">
      <div className=" p-5 ">
        <button className=" w-10 h-10 p-0.5  bg-slate-600 rounded-lg border-slate-600  border-[2px] hover:bg-slate-400 ">
          <AiOutlineAppstore size={32} />
        </button>
        <button className=" w-10 h-10 p-0.5 bg-slate-600 rounded-lg border-slate-600  border-[2px] hover:bg-slate-400 mt-6  ">
          <AiOutlineUpload size={32} />
        </button>
      </div>
    </div>
  );
};
