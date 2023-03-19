import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import Footer from "./Footer";
import WeeklyDiscover from "./WeeklyDiscover";

function BodyPlayer() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  const logOut = () => {
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: null,
      });
    }
  };

  return (
    <div className="flex-1 p-5 bg-gradient-to-b from-purple-900 to-black h-screen overflow-auto">
      <div className="flex items-center justify-between">
        <div className="flex space-x-10 items-center">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
          <ChevronRightIcon className="w-4 h-4 font-bold text-white" />
        </div>
        <div
          className="bg-black p-2 flex space-x-2 items-center justify-center rounded-full cursor-pointer"
          onClick={logOut}
        >
          <UserIcon className="w-4 h-4 text-white font-bold" />
          <p className="text-white font-bold">{user?.display_name}</p>
          <ChevronDownIcon className="w-4 h-4 text-white font-bold" />
        </div>
      </div>

      <WeeklyDiscover />
      <Footer />
    </div>
  );
}

export default BodyPlayer;
