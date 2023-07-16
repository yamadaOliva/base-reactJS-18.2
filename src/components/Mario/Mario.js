import React, { useEffect, useState, useRef } from "react";
import "./Mario.scss";
import { v4 as uuidv4 } from "uuid";

const row = 8;
const col = 6;
const initLayout = [
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0],
];
const marioLocation = {
  x: 7,
  y: 3,
};

const diamondLocation = {
  x: 0,
  y: 4,
};
//define state of block
// 0: empty
// 1: wall (blue)
// 2: mario
// 3: diamond
// 4: mario + diamond

//define state of move
// 0: up
// 1: down
// 2: left
// 3: right

const initMove = [2, 2, 0, 0, 0, 3, 3, 3, 0, 0, 2, 2, 0, 0, 3, 3];

const Mario = () => {
  const [layout, setLayout] = useState(initLayout);
  const [move, setMove] = useState(initMove);
  const [mario, setMario] = useState(marioLocation);
  const [diamond, setDiamond] = useState(diamondLocation);
  const upBtnRef = useRef();
  const downBtnRef = useRef();
  const leftBtnRef = useRef();
  const rightBtnRef = useRef();

  const renderMoveText = (move) => {
    switch (move) {
      case 0:
        return "Move Up";
        break;
      case 1:
        return "Move Down";
        break;
      case 2:
        return "Move Left";
        break;
      case 3:
        return "Move Right";
        break;
      default:
        break;
    }
  };

  const handleStart = async () => {
    let moveIndex = 0;
    const executeNextMove = () => {
      if (moveIndex < move.length) {
        let currentMove = move[moveIndex];
        //handleMove(currentMove);
        if (currentMove === 0) {
          upBtnRef.current.click();
        } else if (currentMove === 1) {
          downBtnRef.current.click();
        } else if (currentMove === 2) {
          leftBtnRef.current.click();
        } else if (currentMove === 3) {
          rightBtnRef.current.click();
        }
        moveIndex++;
        setTimeout(executeNextMove, 500); // Chờ 1 giây trước khi thực hiện lệnh tiếp theo
      }
    };
    executeNextMove();
  };

  const handleMove = (move) => {
    let newMario = {
      ...mario,
    };
    switch (move) {
      case 0:
        if (mario.x > 0) {
          newMario = {
            ...mario,
            x: mario.x - 1,
          };
        }
        break;
      case 1:
        if (mario.x < row - 1) {
          newMario = {
            ...mario,
            x: mario.x + 1,
          };
        }
        break;
      case 2:
        if (mario.y > 0) {
          newMario = {
            ...mario,
            y: mario.y - 1,
          };
        }
        break;

      case 3:
        if (mario.y < col - 1) {
          newMario = {
            ...mario,
            y: mario.y + 1,
          };
        }
        break;
      default:
        break;
    }
    if (layout[newMario.x][newMario.y] === 1) {
      //check collision
      return;
    }
    setMario((mario) => newMario);
  };

  useEffect(() => {
    console.log("mario", mario);
    //check previous mario location
    const previousLocation = () => {
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          if (layout[i][j] === 2) {
            return { x: i, y: j };
          }
        }
      }
    };
    const previous = previousLocation();

    //set new layout
    const newLayout = layout.map((row, i) => {
      return row.map((col, j) => {
        if (i === mario.x && j === mario.y) {
          return 2;
        } else if (i === previous.x && j === previous.y) {
          return 0;
        } else {
          return col;
        }
      });
    });

    //check win
    if (mario.x === diamond.x && mario.y === diamond.y) {
      newLayout[mario.x][mario.y] = 4;
      alert("You win");
    }

    setLayout((layout) => newLayout);
  }, [mario]);

  return (
    <div className="bai3-container">
      <div className="Table-Container">
        <div className="container">
          {layout?.map((row, i) => {
            return (
              <div className="row row-cols-6 row_customize">
                {row.map((col, j) => {
                  if (col === 1) {
                    return (
                      <div
                        className="col col_customize"
                        style={{ backgroundColor: "blue" }}
                        key={uuidv4()}
                      ></div>
                    );
                  } else if (col === 2) {
                    return (
                      <div className="col col_customize flex">
                        <img
                          src={window.location.origin + "/mario.png"}
                          alt="mario"
                          className="object-contain scale-150"
                        />
                      </div>
                    );
                  } else if (col === 3) {
                    return (
                      <div className="col col_customize flex">
                        <img
                          src={window.location.origin + "/diamond.png"}
                          alt="mario"
                          className="object-contain scale-150"
                        />
                      </div>
                    );
                  } else if (col === 4) {
                    return (
                      <div className="col col_customize flex">
                        <img
                          src={window.location.origin + "/win.png"}
                          alt="mario"
                          className="object-contain scale-150"
                        />
                      </div>
                    );
                  } else {
                    return <div className="col col_customize"></div>;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Control-Container">
        <div className="Control-Container-Item">
          {move?.map((item, index) => (
            <div className="Control-Container-Item-Item" key={uuidv4()}>
              {renderMoveText(item)}
            </div>
          ))}
        </div>
        <div className="Control-Container-Btn">
          <div className="hidden	">
            <button
              className="Control-Container-Btn-Item btn-danger btn"
              onClick={() => handleMove(0)}
              ref={upBtnRef}
            >
              Up
            </button>
            <button
              className="Control-Container-Btn-Item btn-danger btn"
              onClick={() => handleMove(1)}
              ref={downBtnRef}
            >
              Down
            </button>
            <button
              className="Control-Container-Btn-Item btn-danger btn"
              onClick={() => handleMove(2)}
              ref={leftBtnRef}
            >
              Left
            </button>
            <button
              className="Control-Container-Btn-Item btn-danger btn"
              onClick={() => handleMove(3)}
              ref={rightBtnRef}
            >
              Right
            </button>
          </div>
          <button
            className="Control-Container-Btn-Item btn-success btn"
            onClick={() => handleStart()}
          >
            Fake
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mario;
