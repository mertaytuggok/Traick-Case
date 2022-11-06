import React from "react";
import { Header } from "../Components/Header/Header";
import { Home } from "../Components/Home/Home";
import { Sidebar } from "../Components/Sidebar/Sidebar";

export const Main = () => {
  return (
    <div>
      <div className=" w-full h-[15%] bg-slate-700">
        <Header />
      </div>
      <div className="flex h-[85%]  bg-slate-700 ">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};
