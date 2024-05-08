import React, { useState, useRef } from "react";
import { robotoBold, robotoLight } from "@/app/utils/font";
function Progress1() {
  const [nameList, setNameList] = useState([]);
  const inputNameRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const nameToAdd = inputNameRef.current.value;

    setNameList([...nameList, nameToAdd]);
    console.log(nameList);
    inputNameRef.current.value = "";
    inputNameRef.current.focus();
  }

  function handleEmptyList(e) {
    e.preventDefault();
    console.log("OPAs");
    setNameList([]);
    console.log(nameList);
  }

  return (
    <div className={` w-full p-2 rounded-sm `}>
      <h1 className={`text-3xl ${robotoBold.className}`}>Criar novo time</h1>
      <h3 className={`text-md text-gray-500  pb-4 ${robotoLight.className}`}>
        Primeiro, liste os nomes de todos os integrantes
      </h3>
      <div className="flex flex-col gap-3 w-96">
        <form
          action="#"
          className="flex flex-col gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <label htmlFor="nomeLista">Nome:</label>
            <input
              ref={inputNameRef}
              type="text"
              name="nomeLista"
              className="w-1/2 rounded-sm p-2"
            />
          </div>
          <div className="flex flex-row gap-3">
            <button
              type="submit"
              className={`border-slate-500 hover:bg-gray-500 transition bg-slate-500  p-2 w-1/2 rounded-sm ${robotoBold.className} uppercase py-3 px-5`}
            >
              Adicionar
            </button>
            <button
              className={`border-slate-500 border-2 p-2 w-1/2 rounded-sm ${robotoBold.className} uppercase py-3 px-5`}
              onClick={(e) => handleEmptyList(e)}
            >
              Limpar lista
            </button>
          </div>
        </form>
        <textarea
          readOnly
          className="resize-none p-4"
          value={nameList.join(", ")}
        ></textarea>
      </div>
    </div>
  );
}

export default Progress1;
