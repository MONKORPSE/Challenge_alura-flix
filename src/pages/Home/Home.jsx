import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import { Main } from "./Home.styled";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const { videos, loading, error } = useVideoContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Muestra el error si hay uno
  }

  const featuredVideo = videos[0];

  return (
    <Main>
      {featuredVideo && <Banner video={featuredVideo} />}
      <CategoryVideos />
    </Main>
  );
};

export default Home;