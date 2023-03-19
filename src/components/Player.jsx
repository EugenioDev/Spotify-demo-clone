import React from "react";
import SideBar from "./SideBar";
import BodyPlayer from "./BodyPlayer";

function Player() {
  return (
    <div className="flex">
      <SideBar />
      <BodyPlayer />
    </div>
  );
}

export default Player;
