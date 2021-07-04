import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [val, setVal] = useState("");
  const [lis, setLis] = useState();
  const [checked, setChecked] = useState(false);

  //to rerender the list comp when sth new added
  const [added, setAdded] = useState(false);
  const [removed, setRemoved] = useState(false);

  function renderTodo() {
    var all = JSON.parse(localStorage.getItem("todo"));
    if (all === null) {
      all = [];
    }
    return all;
  }

  useEffect(() => {
    var list = [];
    list = renderTodo();
    setLis(list);
  }, [added, removed]);

  const addTodo = () => {
    var todoss = [];
    var lstd = JSON.parse(localStorage.getItem("todo"));
    if (lstd !== null) {
      todoss = lstd;
    }
    if (val !== "") {
      todoss.push(val);
    }
    localStorage.setItem("todo", JSON.stringify(todoss));
    setVal("");
    setAdded(!added);
  };

  const checkoff = (i) => {
    // console.log('i checkoff',i) //item name
    setChecked(i);
  };

  const remItem = (i) => {
    console.log("list si", i);
    const ind = lis.indexOf(i);
    console.log("i");
    lis.splice(ind, 1);
    setLis(lis);
    //console.log(lis);
    localStorage.setItem("todo", JSON.stringify(lis));
    setRemoved(!removed);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />

      <button onClick={addTodo}>ADD TODO</button>
      {lis &&
        lis.map((i) => {
          return (
            <ul>
              <li
                key={lis.indexOf(i)}
                style={
                  checked === i
                    ? { textDecoration: "line-through" }
                    : {
                        textDecoration: "none"
                      }
                }
                onClick={() => {
                  checkoff(i);
                }}
              >
                {i}
              </li>
              <button
                onClick={() => {
                  remItem(i);
                }}
              >
                X
              </button>
            </ul>
          );
        })}
    </div>
  );
}
