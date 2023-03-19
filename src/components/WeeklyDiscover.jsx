import { ClockIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import Moment from 'react-moment';
import 'moment/locale/it';


function WeeklyDiscover() {
 
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="">
      <div className="mb-5 flex space-x-5 mt-10 items-center">
        <img className="" src={discover_weekly?.images[0]?.url} alt="" />
        <div>
          <small className="text-white font-bold">{discover_weekly?.owner?.display_name}</small>
          <h1 className="text-white font-bold text-8xl">
            {discover_weekly?.name}
          </h1>
          <p className="text-white">{discover_weekly?.description}</p>
        </div>
      </div>
      <hr />
      
      {/* Table */}
      <table className="table-auto w-full text-left mt-5">
        <thead>
          <tr className=" text-gray-100/50 text-xs">
            <th></th>
            <th># Titolo</th>
            <th>Album</th>
            <th>Aggiunto il giorno</th> 
            <th><ClockIcon className="w-6"/></th>
          </tr>
        </thead>
        <tbody >
          { discover_weekly && discover_weekly?.tracks.items.map((item) => (
          <tr className="hover:bg-gray-600/50 text-white text-xs cursor-pointer" key={item.track?.id} >
            <td className="w-[50px]">
              <PlayCircleIcon className="w-6 h-6"/>
              </td>
            <td className="flex space-x-2 items-center p-2">
              <img className="w-12" src={item.track.album.images[0].url} alt="" />
              <div>
              <h2 className="text-white">{item.track.artists[0]?.name}</h2>
              <p className="text-gray-400">{item.track.album?.name}</p>
              </div>
            </td>
            <td>{item.track.album?.name}</td>
            <td><Moment fromNow>{item.added_at}</Moment></td>
            <td><Moment format="m:ss">{item.track?.duration_ms}</Moment></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeeklyDiscover;
