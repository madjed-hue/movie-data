import { Rating, Typography } from "@mui/material";
import NotFoundCover from "../assets/NotFoundCover.png";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MovieCard = ({ show }) => {
  console.log(show);
  return (
    <div className="movieCard">
      <Link to={`/movie/${show?.id}`}>
        <div className="movieCover">
          <img src={show?.image?.medium || NotFoundCover} alt={show?.name} />
        </div>
        <div className="movieStats" style={{ textAlign: "center" }}>
          <Typography variant="h6"> {show?.name} </Typography>
          <Rating name="read-only" value={show?.rating.average || 2} readOnly />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
