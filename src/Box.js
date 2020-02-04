import React from "react";

const Box = props => {
  const [click, setClick] = React.useState(false);
  const currentBox = React.useRef(null);
  const mouseHandler = () => {
    setClick(!click);
  };

  const TouchHandler = e => {
    mouseHandler();
    // let match = props.pagePosition[0] === e.nativeEvent.touches[0].clientX;
    // match ? setClick(true) : setClick(true);
    // console.log(match);
    // console.log(
    //   "clientX:",
    //   e.nativeEvent.touches[0].clientX,
    //   "clientY:",
    //   e.nativeEvent.touches[0].clientY,
    // );
  };

  console.log(props.pagePosition);

  return (
    <div
      ref={currentBox}
      key={props.id}
      onMouseOver={mouseHandler}
      //   onTouchMove={TouchHandler}
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
