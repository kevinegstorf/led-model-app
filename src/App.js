import React from "react";
import Box from "./Box";
import "./App.css";

function App() {
  const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="App">
      <main>
        <div className="grid">
          {boxArray.map(box => {
            return <Box key={box} id={box} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
