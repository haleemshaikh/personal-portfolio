import React from "react";

export default function DismissableAlert({ type, msg, onClose }) {
  if (type === "success") {
    return (
      <div className="border border-green-600 bg-green-200 text-green-800 font-semibold rounded-md px-3 py-1 flex justify-between items-center">
        <h2 className="text-lg">{msg}</h2>
        <div class="relative w-5 h-5 cursor-pointer" onClick={onClose}>
          <div class="absolute border border-green-700 h-full transform rotate-45 left-1/2 -translate-x-1/2"></div>
          <div class="absolute border border-green-700 h-full transform -rotate-45 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    );
  }
  if (type === "error") {
    return (
        <div className="border border-red-600 bg-red-200 text-red-800 font-semibold rounded-md px-3 py-1 flex justify-between items-center">
          <h2 className="text-lg">{msg}</h2>
          <div class="relative w-5 h-5 cursor-pointer" onClick={onClose}>
            <div class="absolute border border-red-700 h-full transform rotate-45 left-1/2 -translate-x-1/2"></div>
            <div class="absolute border border-red-700 h-full transform -rotate-45 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      );
  }
}
