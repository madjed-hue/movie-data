import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
  Typography,
} from "@mui/material";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect, useState } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import toast, { Toaster } from "react-hot-toast";

const successBooking = () => toast.success("Booked successfully.");
const deleteBooking = () => toast.success("Deleted successfully.");

const MovieDetails = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [bookedMovies, setBookedMovies] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const storedList = JSON.parse(localStorage.getItem("movies"));
      setBookedMovies(storedList);
    }
  }, []);

  const addMovieToLS = (e) => {
    e.preventDefault();
    const newMovie = {
      id: id,
      fullName: fullName,
      phone: phone,
      email: email,
    };
    setBookedMovies([...bookedMovies, newMovie]);
    localStorage.setItem("movies", JSON.stringify([...bookedMovies, newMovie]));
    setOpen(false);
    successBooking();
  };

  const handleDelete = (mv) => {
    const deleted = bookedMovies.filter((t) => t.id !== mv.id);
    setBookedMovies(deleted);
    localStorage.setItem("movies", JSON.stringify(deleted));
    setOpen2(false);
    deleteBooking();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const { id } = useParams();
  const res = useFetch(`/shows/${id}`);
  if (!res) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movieDetails">
      <Toaster />
      <div className="container">
        <Box className="left" sx={{ textAlign: "center" }}>
          <img src={res?.image?.medium} alt="" />
          <Fab color="secondary" variant="extended" onClick={handleClickOpen}>
            <BookmarkIcon sx={{ mr: 1 }} />
            Book Now
          </Fab>
        </Box>
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
            <strong>summary:</strong> {res?.summary?.replace(/<[^>]+>/g, "")}
          </Typography>
          <strong>genres: </strong>
          {res?.genres &&
            res?.genres?.map((genre) => (
              <Typography key={genre} sx={{ display: "inline-block" }}>
                {genre},
              </Typography>
            ))}
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Booking Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Movie Name: <strong>{res?.name}</strong> <br />
            Movie Id: <strong>{res?.id}</strong> <br />
            Movie Language: <strong>{res?.language}</strong> <br />
            Movie Date & Time:{" "}
            <strong>
              {res?.schedule?.days[0]} at {res?.schedule?.time}
            </strong>
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="phone"
              fullWidth
              variant="standard"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addMovieToLS}>Book Now</Button>
        </DialogActions>
      </Dialog>
      {bookedMovies.length && (
        <Box>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: -150, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            <SpeedDialAction
              icon={
                <LocalMoviesIcon
                  onClick={() => {
                    setOpen2(true);
                  }}
                />
              }
              tooltipTitle="My Booking"
            />
          </SpeedDial>
        </Box>
      )}

      {bookedMovies.length && (
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Booked Movies"}</DialogTitle>
          <DialogContent>
            {bookedMovies.map((mv) => (
              <Box key={mv.id} sx={{ display: "flex", alignItems: "center" }}>
                <p>Id : {mv.id}</p> ; <p>Name : {mv.fullName}</p>;
                <p>Phone : {mv.phone}</p> ; <p>Email : {mv.email}</p>
                <DeleteOutlineIcon
                  sx={{ ml: 2, cursor: "pointer" }}
                  color="error"
                  onClick={() => handleDelete(mv)}
                />
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default MovieDetails;
