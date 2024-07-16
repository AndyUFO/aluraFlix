import { CardVideo } from "../CardVideo/CardVideo.jsx";
import useVideos from "../../stores/useVideos.js";
import useCategorias from "../../stores/useCategorias.js";
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert.jsx";
import Modal from "../Modal/index.jsx";
import NuevoVideo from "../../pages/NuevoVideo/index.jsx";

export const CategoryContainer = () => {
  const { dataCategorias, fetchCategorias } = useCategorias();
  const { dataVideos, fetchVideos, deleteVideo } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState([]);

  useEffect(() => {
    fetchCategorias();
    fetchVideos();
  }, []);

  const handleDeleteVideo = (id) => {
    deleteVideo(id);
    Alert({
      message: `Video id :${id} eliminado exitosamente`,
      type: "success",
    });
  };

  const showModal = (video) => {
    setSelectedVideo(video);
    document.getElementById("modal").showModal();
  };

  return (
    <section>
      <Modal>
        <NuevoVideo video={selectedVideo} isEditable={true} />
      </Modal>
      {dataCategorias.map((categoria, idx) => {
        return (
          <div
            key={"category-container-" + idx}
            className={"flex flex-col w-full gap-2 items-center "}
          >
            <button
              className={
                "btn btn-outline btn-info btn-lg text-2xl pointer-events-none w-full mx-2 my-2"
              }
              key={"category-button-" + idx}
            >
              {categoria.nombre}
            </button>
            <div className={"flex flex-row flex-wrap justify-around gap-6"}>
              {dataVideos
                .filter(
                  (video) =>
                    video.categoria.toLowerCase() ===
                    categoria.nombre.toLowerCase(),
                )
                .map((video) => {
                  return (
                    <CardVideo
                      key={"card-video-" + video.id}
                      video={video}
                      handleDeleteVideo={handleDeleteVideo}
                      handleEditVideo={() => showModal(video)}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
