import React from "react";

export const LeftSection = () => {
  return (
    <div className="h-screen w-full md:w-1/2 flex items-center justify-center bg-white">
      
      <div className="w-full max-w-md px-8">
        <h2 className="text-4xl font-semibold text-center">
          Welcome back!
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Simplify your workflow and boost your productivity with Tuga’s App.
          Get started for free.
        </p>


        <div className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="text-right text-sm text-gray-600 cursor-pointer hover:text-gray-400">
            Forgot Password?
          </div>

          <button className="w-full bg-black text-white rounded-full py-3 text-lg mt-4">
            Login
          </button>
        </div>

        
        <div className="text-center text-gray-400 mt-8 my-6">
          or continue with
        </div>

        
        <div className="flex justify-center gap-6">
          <div className="h-10 w-10 flex items-center justify-center bg-black rounded-full transition-all duration-300 ease-out
                hover:scale-110 hover:shadow-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/Logos/google-fill.svg"
              className="h-5 w-5 invert"
              alt="google"
            />
          </div>

          <div className="h-10 w-10 flex items-center justify-center bg-black rounded-full transition-all duration-300 ease-out
                hover:scale-110 hover:shadow-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/Logos/apple-fill.svg"
              className="h-5 w-5 invert"
              alt="apple"
            />
          </div>

          <div className="h-10 w-10 flex items-center justify-center bg-black rounded-full transition-all duration-300 ease-out
                hover:scale-110 hover:shadow-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/Logos/facebook-fill.svg"
              className="h-5 w-5 invert"
              alt="facebook"
            />
          </div>
        </div>

        
        <p className="text-center mt-18 text-gray-600">
          Not a member?{" "}
          <span className="text-black font-semibold cursor-pointer hover:text-gray-700">
            Register now
          </span>
        </p>

      </div>
    </div>
  );
};
