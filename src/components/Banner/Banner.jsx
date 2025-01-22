import React from "react";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
} from "./Banner.styled";

// Importa la imagen del banner
import BannerImage from "./Banner.png"; // Asegúrate de que la ruta sea correcta

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src={BannerImage} alt="Banner" /> {/* Usa la imagen del banner */}
      <BannerContent>
        <div>
          {/* Elimina el BannerTitle para que no se muestre la categoría */}
          <BannerDescription>{video.descripcion}</BannerDescription>
        </div>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;