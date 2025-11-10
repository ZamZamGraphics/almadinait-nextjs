"use client";
import React, { useState } from "react";

function SwitchLanguage() {
  const [language, setLanguage] = useState("BN");

  const active = "text-lime-500 bg-white shadow-sm";

  return (
    <div className="hidden sm:flex justify-center items-center p-1 rounded-xl bg-gray-100">
      <button
        onClick={() => setLanguage("BN")}
        className={`flex flex-col items-start py-1 px-2 rounded-xl ${
          language == "BN" ? active : ""
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => setLanguage("EN")}
        className={`flex flex-col items-start py-1 px-2 rounded-xl ${
          language == "EN" ? active : ""
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default SwitchLanguage;
