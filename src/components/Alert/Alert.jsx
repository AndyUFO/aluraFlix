import { toast } from "react-toastify";

const Alert = ({ message, type }) => {
  switch (type) {
    case "error":
      toast.error(message, {
        theme: "dark",
      });
      break;
    case "success":
      toast.success(message, {
        theme: "dark",
      });
      break;
    case "warning":
      toast.warn(message, {
        theme: "dark",
      });
      break;
    case "info":
      toast.info(message, {
        theme: "dark",
      });
      break;
    default:
      toast(message, {
        theme: "dark",
      });
      break;
  }
};

export default Alert;
