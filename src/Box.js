import React from "react";

const Box = ({ id, screenPosition }) => {
  const [click, setClick] = React.useState(false);
  const currentBox = React.useRef(null);

  const mouseHandler = React.useCallback(() => {
    setClick(!click);
    console.log(Math.round(screenPosition[0]), Math.round(screenPosition[1]));
    const { offsetTop, offsetLeft } = currentBox.current;
    console.log("offset", [offsetLeft, offsetTop]);
  }, [screenPosition, click]);

  return (
    <div
      ref={currentBox}
      key={id}
      onClick={mouseHandler}
      onTouchMove={mouseHandler}
      onMouseEnter={mouseHandler}
    >
      {click ? (
        <div className="box"></div>
      ) : (
        <div className="box box-off"></div>
      )}
    </div>
  );
};

export default Box;
