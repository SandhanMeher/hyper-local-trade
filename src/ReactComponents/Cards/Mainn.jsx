import React from "react";

export default function ({
  pImages = {
    im1: "download.jpeg",
    im2: "download.jpeg",
    im3: "download.jpeg",
    im4: "download.jpeg",
    im5: "download.jpeg",
  },
  price = 1000,
  about = "a sec fan",
}) {
  return (
    <div className=" h-80 w-64 rounded-sm bg-black relative overflow-hidden">
      <div className=" h-9 w-9 m-1 bg-orange-900 absolute z-10  rounded-full ring-1 ring-green-900 hover:scale-125 duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-fill h-fill p-1 text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className=" w-full h-64 bg-slate-700 flex overflow-x-auto  gap-1  ">
        <img src={pImages.im1} alt="" />
        <img src={pImages.im2} alt="" />
        <img src={pImages.im3} alt="" />
        <img src={pImages.im4} alt="" />
        <img src={pImages.im5} alt="" />
      </div>

      <div className=" w-full h-16 bg-stone-500 flex">
        <div className=" h-full w-16 text-white flex-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-3">
            Rs:{price}
          </h3>
          <blockquote className="mt-1 ml-1 italic">{about}</blockquote>
        </div>
        <div className=" basis-24 bg-white rounded-full  flex items-center justify-around my-3 mr-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-sky-300 hover:scale-125 duration-500"
          >
            <path
              fillRule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-blue-900 hover:scale-125 duration-500"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
