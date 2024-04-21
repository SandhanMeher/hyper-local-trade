import React from "react";

// import p1 from "./profile.png"
export default function Profile() {
  return (
    <div className=" min-h-screen w-screen bg-stone-300 flex  flex-col gap-6 pt-6  items-center ">
      <div className=" w-5/6 h-52  backdrop-blur-lg  rounded-lg overflow-hidden">
        <div className=" w-28 rounded-full h-28 bg-slate-50 overflow-hidden">
          <img src="profile.jpeg" className=" h-full w-full" alt="" srcset="" />
        </div>
        <div className=" h-24 w-full py-1 px-2 ">
          <h2
            role="name"
            className="scroll-m-20   text-2xl font-semibold tracking-tight first:mt-0"
          >
            Ipsit Mohanty
          </h2>
          <h3
            role="gmail"
            className="scroll-m-20 text-lg font-semibold tracking-tight"
          >
            ipsita83@gmail.com
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-0">Bhubaneswar</p>
        </div>
      </div>
      <div className=" w-5/6 h-52 bg-stone-500 rounded-lg"></div>
      <div className=" w-5/6 h-52 bg-stone-500 rounded-lg"></div>
    </div>
  );
}
