import { useState } from "react/cjs/react.development";
import "./modal.scss";
import easyMode from "../../images/image-rules.svg";
import hardMode from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";
export const Modal = ({ gamemode }) => {
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
          {gamemode === "easy" ? (
            <img src={easyMode} alt="Rules for easy mode" />
          ) : (
            <img src={hardMode} alt="Rules for hard mode" />
          )}
        </div>
      ) : null}
    </>
  );
};
