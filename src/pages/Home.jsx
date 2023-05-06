import { Banner, MovieCard } from "../components";
import requests from "../utils/requests";
import useFetch from "../utils/useFetch";

const Home = () => {
  const res = useFetch(requests.fetchAll);
  if (!res) {
    return <div>Loading...</div>;
  }
  const bannerMovie = res[Math.floor(Math.random() * res.length - 1)];

  console.log(res);
  return (
    <div className="home">
      <Banner bannerMovie={bannerMovie} />
      <div className="movieCards">
        {res && res.map(({ show }) => <MovieCard show={show} key={show?.id} />)}
      </div>
    </div>
  );
};

export default Home;
