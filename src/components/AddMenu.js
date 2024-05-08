"use client";
import useStore from "@/app/ZustandCentral";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
function AddMenu() {
  const initCreateNewTeam = useStore((state) => state.initCreateNewTeam);
  const createNewTeam = useStore((state) => state.createNewTeam);
  function handleClick() {
    initCreateNewTeam();
  }

  return (
    <div className="absolute w-1/12 left-0 bottom-0 p-6">
      <button className="p-1 bg-slate-300 rounded-full" onClick={handleClick}>
        <IoAddOutline size={48} title="Create a new team" />
      </button>
    </div>
  );
}

export default AddMenu;
