import { useForm } from "react-hook-form";
import useCategorias from "../../stores/useCategorias.js";
import { useEffect } from "react";
import useVideos from "../../stores/useVideos.js";
import Alert from "../../components/Alert/Alert.jsx";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function NuevoVideo({ video, isEditable }) {
  const { addVideo, error, editVideo } = useVideos();
  const { dataCategorias } = useCategorias();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditable) {
      setValue("titulo", video?.titulo);
      setValue("categoria", video?.categoria);
      setValue("urlImagen", video?.urlImagen);
      setValue("urlVideo", video?.urlVideo);
      setValue("descripcion", video?.descripcion);
    }
  }, [video]);

  const onSubmit = (data) => {
    if (isEditable) {
      editVideo(video.id, data);
      if (error !== null) {
        Alert({ message: "Error al editar el video " + error, type: "error" });
      } else {
        let modal = document.getElementById("modal");
        modal.close();
        Alert({ message: "Video editado exitosamente", type: "success" });
      }
    } else {
      addVideo(data);
      if (error !== null) {
        Alert({ message: "Error al agregar el video " + error, type: "error" });
      } else {
        Alert({ message: "Video agregado exitosamente", type: "success" });
        navigate("/");
        //todo : descomentar esta linea
      }
    }
  };

  const resetForm = () => {
    reset({
      titulo: "",
      categoria: "",
      urlImagen: "",
      urlVideo: "",
      descripcion: "",
    });
  };

  console.log("Editar :", isEditable);
  console.log("Video a editar: " + JSON.stringify(video));
  return (
    <div className={"flex flex-col my-3 w-fit"}>
      <h2 className={"text-2xl font-bold"}>
        {isEditable ? "EDITAR VIDEO" : "NUEVO VIDEO"}
      </h2>
      {!isEditable ? (
        <p className={"text-xl"}>
          Complete el formulario para crear una nueva tarjeta de video
        </p>
      ) : (
        ""
      )}
      <form
        className={"flex flex-col my-4 gap-2"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-lg">Titulo :</span>
          </div>
          <input
            type="text"
            placeholder="Titulo del video"
            className="input input-bordered input-info"
            size={50}
            {...register("titulo", { required: true })}
          />
        </label>
        {errors.titulo?.type === "required" && (
          <p role="alert">Se requiere el titulo</p>
        )}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text  text-lg">Categoria</span>
          </div>
          <select
            defaultValue={""}
            className="select select-bordered w-full select-info"
            {...register("categoria", { required: true })}
          >
            <option disabled value={""}>
              Seleccione una categoria
            </option>
            {dataCategorias.map((categoria) => {
              return (
                <option key={"select-categoria-" + categoria.id}>
                  {categoria.nombre}
                </option>
              );
            })}
          </select>
          {errors.categoria?.type === "required" && (
            <p className={"my-3"} role="alert">
              Se requiere la categoria
            </p>
          )}
        </label>
        <label className="form-control ">
          <div className="label">
            <span className="label-text  text-lg">Imagen :</span>
          </div>
          <input
            type="text"
            placeholder="URL de la imagen"
            className="input input-bordered input-info"
            {...register("urlImagen", { required: true })}
          />
        </label>
        {errors.urlImagen?.type === "required" && (
          <p role="alert">Se requiere la url de la imagen</p>
        )}
        <label className="form-control ">
          <div className="label">
            <span className="label-text  text-lg">Video :</span>
          </div>
          <input
            type="text"
            placeholder="URL del video"
            className="input input-bordered input-info"
            {...register("urlVideo", { required: true })}
          />
        </label>
        {errors.urlVideo?.type === "required" && (
          <p role="alert">Se requiere la url del video</p>
        )}
        <label className="form-control">
          <div className="label">
            <span className="label-text  text-lg">Descripción</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 textarea-info"
            placeholder="¿De que se trata este video?"
            {...register("descripcion", { required: true })}
          ></textarea>
        </label>
        {errors.descripcion?.type === "required" && (
          <p role="alert">Se requiere la descripción del video</p>
        )}
        <div className={"flex flex-row justify-end gap-5 "}>
          <button type={"submit"} className="btn btn-outline">
            Guardar
          </button>
          <button className="btn btn-outline" onClick={resetForm}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NuevoVideo;
