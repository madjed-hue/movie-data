import { Typography } from "@mui/material";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const res = useFetch(`/shows/${id}`);
  if (!res) {
    return <div>Loading...</div>;
  }
  console.log(res);
  return (
    <div className="movieDetails">
      <div className="container">
        <div className="left">
          <img src={res?.image?.medium} alt="" />
        </div>
        <div className="right">
          <Typography variant="h2">{res?.name}</Typography>
          <Typography>
            <strong>id:</strong> {res?.id}
          </Typography>
          <Typography>
            <strong>Average Run Time:</strong> {res?.averageRuntime}
          </Typography>
          <Typography>
            {" "}
            <strong>ended:</strong> {res?.ended || ""}
          </Typography>
          <Typography>
            <strong>language:</strong> {res?.language}
          </Typography>
          <Typography>
            {" "}
            <strong>premiered:</strong> {res?.premiered}
          </Typography>
          <Typography>
            {" "}
            <strong>rating:</strong> {res?.rating?.average}
          </Typography>
          <Typography>
            {" "}
            <strong>runtime:</strong> {res?.runtime}{" "}
          </Typography>
          <Typography>
            <strong>schedule:</strong> {res?.schedule?.days[0]} at{" "}
            {res?.schedule?.time}{" "}
          </Typography>
          <Typography>
            {" "}
            <strong>status:</strong> {res?.status}
          </Typography>
          <Typography>
            {" "}
            <strong>summary:</strong> {res?.summary}
          </Typography>
          <Typography>
            {" "}
            <strong>type:</strong> {res?.type}
          </Typography>
          <Typography>
            {" "}
            <strong>updated: </strong>
            {res?.updated}{" "}
          </Typography>
          <Typography>
            <a href={`${res?.url}`}>
              {" "}
              <strong>url</strong>
            </a>
          </Typography>
          <Typography>
            <a href={`${res?._links?.previousepisode?.href}`}>
              <strong>Prvious Episode</strong>{" "}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
