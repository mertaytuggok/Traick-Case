import React from "react";

export const Home = () => {
  return (
    <div className="flex justify-around p-3">
      <div className="w-full min-w-[25%] h-fit grid gap-y-5">
        <h1 className="text-white text-xl">Başlık</h1>
        <div className="w-[350px] h-[180px] rounded-2xl bg-slate-400 justify-center items-center text-center">
          <div className="flex  items-center text-center pt-8 pb-4 justify-between">
            <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
            <div>asdasd</div>
          </div>
          <div>asdasd</div>
        </div>
        <div className="w-[350px] h-[80px] rounded-2xl bg-slate-400 mt-3 text-white font-semibold text-xl justify-center p-5 text-center">
          <p> Lorem Ipsum</p>
        </div>
      </div>

      <div className="">Görüntü</div>
    </div>
  );
};
