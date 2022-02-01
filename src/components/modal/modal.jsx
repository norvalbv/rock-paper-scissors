import { useState } from "react/cjs/react.development";
import "./modal.scss";

export const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rules">
      <button onClick={() => setOpen(!open)}>Rules</button>
    </div>
  );
};
