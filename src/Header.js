import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="Priyanka" src="Priyanka" />

        <AccessTimeIcon />
      </div>

      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>

      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
