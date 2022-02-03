import "./gamemode.scss";
export const GameMode = ({ choseMode }) => {
  return (
    <>
      <button onClick={() => choseMode()} id="gamemode">
        Set Mode
      </button>
    </>
  );
};
