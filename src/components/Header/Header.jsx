import logo from "/img/logo.png";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToNuevoVideo = () => {
    navigate("/nuevo-video");
  };

  return (
    <div className="navbar bg-base-100 h-40 shadow-md shadow-blue-600  drop-shadow-sm">
      <div className="navbar-start">
        <img src={logo} alt="logo" className="w-60 ml-12 bg-base-100" />
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end gap-6 mr-4">
        <button
          className="btn btn-info btn-outline text-2xl"
          onClick={redirectToHome}
        >
          HOME
        </button>
        <button
          className="btn btn-info  btn-outline text-2xl"
          onClick={redirectToNuevoVideo}
        >
          NUEVO VIDEO
        </button>
      </div>
    </div>
  );
};
