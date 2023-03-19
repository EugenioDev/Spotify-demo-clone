import { ArrowPathRoundedSquareIcon, BackwardIcon, DeviceTabletIcon, ForwardIcon, PlayCircleIcon, QueueListIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDataLayerValue } from "../DataLayer";

function Footer() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="text-black absolute bottom-0 left-0 right-0 bg-gray-900/90 h-[65px] flex items-center space-x-2 p-5 justify-between">
      <div className="flex space-x-2 items-center">
        <img
          className="h-10 object-contain w-10"
          src={discover_weekly?.images[0]?.url}
          alt=""
        />
        <div className="">
          <p className="text-white font-bold"> Yeah </p>
          <small className="">Usher</small>
        </div>
      </div>

      {/* Middle Controls */}
      <div className="flex max-w-xs space-x-3 items-center text-white">
        <BackwardIcon className="w-6 h-6"/>
        <PlayCircleIcon className="w-10 h-10"/>
        <ForwardIcon className="w-6 h-6"/>
        <ArrowPathRoundedSquareIcon className="w-6 h-6"/>
      </div>

       {/* Other Controls */}
       <div className="flex space-x-3 text-white">
        <QueueListIcon className="w-6 h-6"/>
        <DeviceTabletIcon className="w-6 h-6"/>
        <SpeakerWaveIcon className="w-6 h-6"/>
       </div>
    </div>
  );
}

export default Footer;
