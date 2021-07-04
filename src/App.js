import "./App.css";
import Box from "./Box";
import { useState } from "react";


export default function App() {
  const colors = ["blue", "green", "red", "yellow"];
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      {colors &&
        colors.map((i) => {
          return (
            <Box
              key={i}
              id={i}
              color={i}
              clicked={clicked}
              setClicked={setClicked}
            />
          );
        })}
    </div>
  );
}
