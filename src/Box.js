import React from "react";

const Box = props => {
  const [click, setClick] = React.useState(false);
  const currentBox = React.useRef(null);

  const mouseHandler = React.useCallback(() => {
    setClick(!click);
    console.log(props.pagePosition);
    const { offsetTop, offsetLeft } = currentBox.current;
    console.log("offset", [offsetLeft, offsetTop]);
  }, [click]);

  const TouchHandler = e => {};

  return (
    <div
      ref={currentBox}
      key={props.id}
      onClick={mouseHandler}
      onTouchMove={mouseHandler}
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
