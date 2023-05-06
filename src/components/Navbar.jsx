import SearchIcon from "@mui/icons-material/Search";
import CineVerseLogoBlack from "../assets/CineverseBlack.png";
import { useState } from "react";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="navbar flex">
      <div className="left-nav">
        <div className="logo">
          <img src={CineVerseLogoBlack} alt="cineverse-logo" />
        </div>
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
