import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Master() {
  return (
    <>

      <Navbar />
      <div className="container">
      <Outlet />

      </div>
   
    </>
  );
}
