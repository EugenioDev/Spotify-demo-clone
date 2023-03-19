import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../DataLayer";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/solid";
import Moment from "react-moment";
import SongRow from "./SongRow";
import SpotifyWebApi from "spotify-web-api-js";

function SearchItem() {

  const token =
    "BQAxI-3AfPqDnnTf__4YPsFumC6K_lR96vhaoaGmDtMxMLbs3ap01YY5OOU_ZFPpNFwv59IyNE7HFSMnbkO93UpRPXzdnktre-kxvrfp31GEqLLDTcUcaYw-kRe0VkMbCUVXJFhzWKEWGbBP6mhEGZfGRbZhIbLDK-ebkiUnnVP83rz9xe359wTG7TC8ypU297n2JDQ5iXQaoOUPdHKVnGoweF8i";

  const [{ user }] = useDataLayerValue();
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${search}&market=US&type=track,album&limit=50&access_token=${token}`
    )
      .then((req) => req.json())
      .then((resp) => setTracks(resp));
  }, [search]);

  return (
    <div className="overflow-y-scroll w-screen bg-gradient-to-b from-purple-900 to-black">
      <div className="p-4 flex justify-between">
        <form className="flex text-gray space-x-3 items-center bg-gray-100 px-4 rounded-full">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cerca un brano o un artista"
            className="p-2 rounded-md w-full text-black outline-none bg-transparent placeholder:text-xs"
          />
        </form>
        <div className="bg-black p-2 flex space-x-2 items-center justify-center rounded-full cursor-pointer">
          <UserIcon className="w-4 h-4 text-white font-bold" />
          <p className="text-white font-bold">{user?.display_name}</p>
          <ChevronDownIcon className="w-4 h-4 text-white font-bold" />
        </div>
      </div>
      <div className="p-4  h-screen overflow-y-scroll">
        <h1 className="text-white font-bold text-2xl">
          Stai cercando per: {search}
        </h1>

        {search ? (
          <table className="table-auto w-full text-left mt-5">
            <thead>
              <tr className=" text-gray-100/50 text-xs ">
                <th className="w-[800px]"># Titolo</th>
                <th className="w-[300px]">Album</th>
                <th className="w-[300px]">Data di rilascio</th>
                <th>Artista</th>
                {/* <th><ClockIcon className="w-6"/></th> */}
              </tr>
            </thead>
            <tbody>
              {tracks &&
                tracks.albums?.items?.map((item) => (
                  <SongRow track={item}/>
                ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">Cerca qualcosa per cominciare...</p>
        )}
      </div>
    </div>
  );
}

export default SearchItem;
