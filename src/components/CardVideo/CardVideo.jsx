export const CardVideo = ({ video, handleDeleteVideo, handleEditVideo }) => {
  return (
    <div
      className="card bg-base-300 w-96 h-96 shadow-xl"
      key={"card-video-" + video.id}
    >
      <figure>
        <img src={video.urlImagen} alt={video.titulo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{video.id + ": " + video.titulo}</h2>
        <p>{video.descripcion}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleDeleteVideo(video.id)}
          >
            Borrar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleEditVideo(video.id)}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
