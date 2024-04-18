import React from "react";

export default function () {
  return (
    <div className=" h-80 w-64 rounded-sm bg-black overflow-hidden">
      <div className=" h-10 w-10 bg-orange-900 fixed z-30 -ml-3 -mt-3 rounded-full ring-1 ring-green-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-fill h-fill p-1 text-white "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className=" w-full h-64 bg-slate-700 flex overflow-x-auto  gap-1 ">
        <img src="download.jpeg" alt="" />
        <img src="download.jpeg" alt="" />
        <img src="download.jpeg" alt="" />
        <img src="download.jpeg" alt="" />
        <img src="download.jpeg" alt="" />
        <img src="download.jpeg" alt="" />
      </div>
      <div className=" w-full h-16 bg-stone-500 flex">
        <div className=" h-full w-16 text-white flex-1">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-3">
      Rs:1000
    </h3>
    <blockquote className="mt-1 ml-1 italic">
        lorem10 Lorem ipsum dolor sit amet.
    </blockquote>
        </div>
        {/* <div className=" h-full w-16 text-amber-200">
        </div> */}
      </div>
    </div>
  );
}
