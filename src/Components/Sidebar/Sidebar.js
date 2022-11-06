import React from "react";
import { AiOutlineUpload, AiOutlineAppstore } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <div className="w-[5%] h-[75%] min-h-[843px] grid grid-rows-1 place-content-center  bg-slate-900   text-white">
      <div className=" p-5 ">
        <div className=" w-10 h-10 p-0.5  bg-slate-600 rounded-lg border-slate-600  border-[2px] ">
          <AiOutlineAppstore size={32} />
        </div>
        <div className=" w-10 h-10 p-0.5 bg-slate-600 rounded-lg border-slate-600  border-[2px] mt-6  ">
          <AiOutlineUpload size={32} />
        </div>
      </div>
    </div>
  );
};
