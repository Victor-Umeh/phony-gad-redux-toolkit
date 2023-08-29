import { closeModal, openModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            confrim
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
