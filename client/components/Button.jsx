import React from "react";

const Button = ({ label, icon, click }) => {
  return icon ? (
    <div className="mt-4">
      <button
        type="button"
        className="py-2.5 px-5 text-[0.8vw] w-full font-semibold text-gray-900 focus:outline-none bg-gray-50 rounded-lg border border-gray-300 focus:z-10 flex items-center gap-2 justify-center"
      >
        {icon && (
          <div className="w-[1vw] h-[1vw] flex items-center justify-center">
            {icon}
          </div>
        )}
        {label}
      </button>
    </div>
  ) : (
    <div className="mt-4">
      <button
        type="button"
        onClick={click}
        className="py-2.5 px-5 text-[0.8vw] w-full font-semibold text-white focus:outline-none bg-gray-900 rounded-lg border border-gray-200 focus:z-10 flex items-center gap-2 justify-center"
      >
        {icon && <span className="w-5 h-5">{icon}</span>} {label}
      </button>
    </div>
  );
};

export default Button;
