import React, { useState } from "react";
import "./Sidebar.scss";
import Logo from "../../img/logo";
import { UilEstate } from "@iconscout/react-unicons";
const Sidebar = () => {
   const sidebar = [
      {
         icon: UilEstate,
         name: "Dashboard",
      },
      {
         icon: UilEstate,
         name: "Stores",
      },
      {
         icon: UilEstate,
         name: "Staffs",
      },
      {
         icon: UilEstate,
         name: "Profit",
      },
   ];

   const [selected, setSelected] = useState(0);
   return (
      <div className="sidebar">
         {/* Logo */}
         <div className="logo">
            <Logo />
            <span>
               Co<span>de</span>v
            </span>
         </div>
         {/* Menu */}
         <div className="menu">
            {sidebar.map((item, index) => (
               <div
                  className={
                     selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
               >
                  <item.icon />
                  <span>{item.name}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
