import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import "./style.css";

import {
  About,
  ContactUs,
  HomePage,
  Games,
  Movies,
  NotFound,
} from "../../pages";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

export const SideBar = (props) => {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">
              <HomeIcon /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <InfoIcon />
              About
            </Link>
          </li>
          <li>
            <Link to="/contactUs">
              <CallIcon />
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/games">
              <SmartToyIcon />
              Games
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <MovieCreationIcon />
              Movies
            </Link>
          </li>
          <li className="avi">
            <FaceRetouchingNaturalIcon /> Avi
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/games" element={<Games></Games>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
};
