import SearchIcon from "@mui/icons-material/Search";
import CineVerseLogoBlack from "../assets/CineverseBlack.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="navbar flex">
      <div className="left-nav">
        <Box className="logo">
          <Link to="/">
            <img src={CineVerseLogoBlack} alt="cineverse-logo" />
          </Link>
        </Box>
      </div>
      <div className="right-nav">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search movie..."
            className={`${isFocused ? "active" : ""}`}
            onClick={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
