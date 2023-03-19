import React from "react";

function SidebarOption({ title, Icon }) {
  return (
    <div className="flex items-center space-x-2 my-4 cursor-pointer">
      {Icon}
      <p className="text-gray-300">{title}</p>
    </div>
  );
}

export default SidebarOption;
