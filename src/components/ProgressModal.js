"use client";
import React, { useRef, useState, useEffect } from "react";
import useStore from "@/app/ZustandCentral";
import progresScript from "@/app/progressScript";
import ZustandCentral from "@/app/ZustandCentral";

function ProgressModal() {
  const refProgress = useRef(null);
  const totalModals = useStore((state) => state.totalModals);
  const progress = useStore((state) => state.progress);
  const progressOn = useStore((state) => state.progressOn);
  const createNewTeam = useStore((state) => state.createNewTeam);
  const [progressBar, setProgressBar] = useState(0);
  const reset = useStore((state) => state.reset);
  function handleClick() {
    console.log(progress);
    progressOn();
    if (progress !== totalModals - 1) {
      refProgress.current.style.width = `${progressBar}%`;

      const calc = (1 * (progress + 1)) / totalModals;
      let counterWidth = Number.parseInt(
        window.getComputedStyle(refProgress.current).getPropertyValue("width")
      );

      let counter = progressBar + 12;
      let toAdd = 100 / totalModals;

      function animate() {
        counter += 6 / (progress + 1);

        counterWidth = calc * counter;
        refProgress.current.style.width = `${counterWidth}%`;
        if (counter >= 100) {
          refProgress.current.style.width = `${counterWidth}%`;
          setProgressBar(toAdd * (progress + 1));
          cancelAnimationFrame(animate);
        } else {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
  }

  function resetProgress() {
    reset();
    setProgressBar(0);
  }

  return (
    createNewTeam && (
      <div className="relative w-1/3 shadow-2xl shadow-slate-300">
        <div className="bg-blue-50 w-full  p-10 rounded-sm text-slate-900">
          {createNewTeam ? (
            <div className="flex flex-col gap-3 relative">
              {progresScript[progress]}
              <button
                className="bg-slate-800 w-1/3 text-gray-50 uppercase px-5 py-2 rounded-sm hover:bg-slate-700 transition"
                onClick={handleClick}
              >
                Continuar {"->"}
              </button>
            </div>
          ) : (
            <>
              <h1>Thank you!</h1>
              <button
                className="bg-slate-800 w-1/3 text-gray-50 uppercase px-5 py-2 rounded-sm hover:bg-slate-700 transition"
                onClick={() => resetProgress()}
              >
                Continuar {"->"}
              </button>
            </>
          )}
        </div>
        <div className="outerProgress w-full h-1 bg-green-200 flex items-center absolute bottom-0 left-0">
          <div
            ref={refProgress}
            className="innerProgress w-0 h-2 bg-green-400 border-2 border-green-300 rounded-xl transition "
          ></div>
        </div>
      </div>
    )
  );
}

export default ProgressModal;
