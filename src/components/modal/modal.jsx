import { useState } from "react/cjs/react.development";
import "./modal.scss";
import modalSrc from "../../images/image-rules.svg";
import close from "../../images/icon-close.svg";
export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);


  // Put this modal as a PORTAL to another node.
  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} id="rules">
        Rules
      </button>
      {openModal ? (
        <div id="modal">
          <h2 id="rules-title">Rules</h2>
          <img
            src={close}
            alt="close button"
            id="close"
            onClick={() => setOpenModal(!openModal)}
          />
          <img src={modalSrc} alt="Rules" />
        </div>
      ) : null}
    </>
  );
};
