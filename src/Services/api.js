import axios from "axios";

// Cambia la baseURL a la nueva URL proporcionada
const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/MONKORPSE/alura-cinema-api",
});

// Función para obtener videos
export const getVideos = async () => {
  try {
    const response = await api.get("/db"); // Cambia la ruta a /db
    return response.data.videos; // Asegúrate de que esto coincida con la estructura de la respuesta
  } catch (error) {
    console.error("Error al buscar los videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

// Función para guardar un nuevo video
export const saveVideo = async (video) => {
  try {
    const response = await api.post("/videos", video); // Asegúrate de que la ruta sea correcta
    return response.data; // Retorna los datos del video creado
  } catch (error) {
    console.error("Error al crear el video", error);
    throw new Error("No se pudo crear el video. Intente de nuevo.");
  }
};

// Función para eliminar un video
export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`); // Asegúrate de que la ruta sea correcta
    return response.data; // Retorna los datos del video eliminado
  } catch (error) {
    console.error("Error al borrar el video", error);
    throw new Error("No se pudo borrar el video. Intente de nuevo.");
  }
};

// Función para actualizar un video
export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/videos/${videoId}`, updatedVideo); // Asegúrate de que la ruta sea correcta
    return response.data; // Retorna los datos del video actualizado
  } catch (error) {
    console.error("Error al actualizar el video", error);
    throw new Error("No se pudo actualizar el video. Intente de nuevo.");
  }
};

export default api;