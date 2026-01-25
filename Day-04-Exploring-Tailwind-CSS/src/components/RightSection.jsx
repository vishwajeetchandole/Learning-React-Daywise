import React from "react";

const RightSection = () => {
  return (
    <div
      className="
    hidden md:flex
    w-1/2 h-[90%]
    bg-[rgb(245,250,244)]
    rounded-[40px]
    p-10
    items-center justify-center
    mr-40
    mt-10
  "
    >
      <div className="text-center px-10">
        <img
          src="../src/assets/illustration.png"
          alt="illustration"
          className="max-w-md mx-auto"
        />

        <p className="mt-6 text-lg text-gray-700">
          Make your work easier and organized <br />
          with <span className="font-semibold text-black">Tuga’s App</span>
        </p>
      </div>
    </div>
  );
};

export default RightSection;
