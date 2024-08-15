import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Navbar from "./navbar";
import Middle1 from "./middle1";
import Map from "./map";
import Album from "./Album";
import { useState, useEffect } from "react";

export const Model3 = ({ data }) => {

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Model3;
