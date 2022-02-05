import "./gamemode.scss";
export const GameMode = ({ choseMode, gamemode }) => {
  return (
    <>
      <button onClick={() => choseMode()} id="gamemode">
        Set To {gamemode === "easy" ? "Hard" : "Easy"}
      </button>
    </>
  );
};
