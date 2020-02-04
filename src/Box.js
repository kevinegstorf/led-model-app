import React from "react";

const Box = ({ id }) => {
  const [click, setClick] = React.useState(false);
  const clickHandler = clicked => {
    setClick(!click);
  };

  return (
    <div key={id} onMouseEnter={clickHandler} onTouchMoveCapture={clickHandler}>
      {click ? (
        <div className="box"></div>
      ) : (
        <div className="box box-off"></div>
      )}
    </div>
  );
};

export default Box;
