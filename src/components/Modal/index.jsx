const Modal = ({ children }) => {
  console.log("Modal renderizado");
  return (
    <dialog id={"modal"} className="modal">
      <div className="modal-box">
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
