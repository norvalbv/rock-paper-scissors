export const GameButtons = ({ choiceArr, handleClick, imgSources, test }) => {
  return (
    <div className="icons">
      {choiceArr.map((item) => (
        <div
          key={choiceArr.indexOf(item)}
          className={["icon-3d-display", `${item}-3d`.toLowerCase()].join(" ")}
        >
          <span
            className={[`${item}-wrap`.toLowerCase(), "grad-wrap"].join(" ")}
          >
            <button
              onClick={() => handleClick({ item })}
              // onClick={() => test(reducer, item)}
              id={item}
              className="game-button"
            >
              <img
                src={imgSources[choiceArr.indexOf(item)]}
                alt={[item, "Icon"].join(" ")}
              />
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};
