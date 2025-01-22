import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Button from "../Button/Button"; // Asegúrate de que la ruta sea correcta
import Card from "../Card/Card"; // Asegúrate de que la ruta sea correcta
import { VideoList } from "./CategoryVideos.styled"; // Asegúrate de que la ruta sea correcta

const CategoryVideos = () => {
  const { videoCategory, loading, error } = useVideoContext();

  if (loading) {
    return <p>Cargando videos...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Muestra el error si hay uno
  }

  if (Object.keys(videoCategory).length === 0) {
    return <p>No hay videos disponibles.</p>;
  }

  return (
    <div>
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <Button onClick={() => console.log(`Clicked on ${category}`)}>
            {category}
          </Button>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;