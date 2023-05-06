import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useFetch = (url) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      const result = request.data;
      setMovie(result);
      return request;
    }
    fetchData();
  }, [url]);
  return movie;
};

export default useFetch;
