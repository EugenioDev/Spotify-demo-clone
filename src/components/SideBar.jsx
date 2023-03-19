import React from "react";
import { useDataLayerValue } from "../DataLayer";
import SidebarOption from "./SidebarOption";
import {
  FolderMinusIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Search from "../pages/Search";

function SideBar() {
  const [{ playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="h-screen bg-black p-2 px-5">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className="object-contain w-36 mb-5"
        alt="Spotify logo"
      />
      <Link  exact to="/">
        <SidebarOption
          title="Home"
          Icon={<HomeIcon className="w-5 h-5 text-white" />}
        />
      </Link>

      <Link to="/search">
        <SidebarOption
          title="Cerca"
          Icon={<MagnifyingGlassIcon className="w-5 h-5 text-white" />}
        />
      </Link>

      <SidebarOption
        title="La tua libreria"
        Icon={<FolderMinusIcon className="w-5 h-5 text-white" />}
      />

      <hr className="text-gray-300 mt-10" />
      <div className="p-2">
        {playlist &&
          playlist.items.map((item) => (
            <p className=" text-gray-400 hover:text-white mt-2" key={item.id}>
              {item.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default SideBar;
