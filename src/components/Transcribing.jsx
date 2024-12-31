import React from "react";

export default function Transcribing({ downloading }) {
  return (
    <div className="flex items-center flex-col flex-1 justify-center gap-10 md:gap-14 text-center pb-24 p-4">
      <div>
        <h1 className="font-semibold text-4xl sm:5xl md:6xl">
          <span className="text-blue-400 bold">Transcribing</span>
        </h1>
        <p>
          {!downloading ? "warming up cylinders" : "core cylinders engaged"}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 max-w-[400px] mx-auto w-full">
        {[0, 1, 2].map((value) => {
          return (
            <div
              key={value}
              className={
                "rounded-full h-2 sm:h-3 bg-slate-400 loading " +
                `loading${value}`
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
