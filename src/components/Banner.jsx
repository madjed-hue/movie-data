/* eslint-disable react/prop-types */
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Typography } from "@mui/material";

const Banner = ({ bannerMovie }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${
          bannerMovie?.show?.image?.original || bannerMovie?.show?.image?.medium
        })`,
      }}
    >
      <div className="banner__content">
        <Typography variant="h1" className="banner__title">
          {bannerMovie?.show.name ? bannerMovie?.show.name : "Movie Name"}
        </Typography>
        <div className="bunner__buttons">
          <button className="banner__btn">
            <PlayCircleOutlineIcon /> Play
          </button>
          <button className="banner__btn">
            <FormatListBulletedIcon /> My List
          </button>
        </div>
        <Typography variant="subtitle2" className="banner__desc">
          {truncate(`${bannerMovie?.show.summary}`, 150)}
        </Typography>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;
