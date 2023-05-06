import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, MovieDetails } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
