import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Moment from "react-moment";

function SongRow({ track }) {

  console.log(track);

  return (
    <tr
      className="hover:bg-gray-600/50 text-white text-xs cursor-pointer"
      key={track?.id}
    >
      <td className="flex space-x-2 items-center p-2">
        <img src={track?.images[0]?.url} alt="" className="w-28" />
        <div>
          <p>{track?.name}</p>
        </div>
      </td>

      <td>{track?.album_type}</td>
      <td>
        <Moment fromNow>{track?.release_date}</Moment>
      </td>

      <td>{track?.artists[0].name}</td>
    </tr>
  );
}

export default SongRow;
