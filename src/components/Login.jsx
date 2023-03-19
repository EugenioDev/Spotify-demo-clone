import React from "react";
import { accessUrl } from "../spotify";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className="object-contain"
        alt="Spotify logo"
      />
      {/* Spotify button to login page */}
      <a href={accessUrl} className="text-white bg-[#1DB954] p-4 rounded-full">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
