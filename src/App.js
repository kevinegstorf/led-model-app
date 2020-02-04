import React from "react";
import Box from "./Box";
import "./App.css";

function App() {
  const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [pageX, setPageX] = React.useState();
  const [pageY, setPageY] = React.useState();

  const touchHandler = React.useCallback(e => {
    setPageX(e.touches[0].pageX);
    setPageY(e.touches[0].pageY);
  }, []);

  return (
    <div className="App" onTouchMove={touchHandler}>
      <main>
        <div className="grid">
          {boxArray.map(box => {
            return <Box key={box} id={box} screenPosition={[pageX, pageY]} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
