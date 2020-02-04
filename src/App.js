import React from "react";
import Box from "./Box";
import "./App.css";

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

function App() {
  useLockBodyScroll();
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
