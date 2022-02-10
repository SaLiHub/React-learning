import  { useState } from "react";

const todoList = [
  { id: 1, name: "Buy elephant", isChecked: true },
  { id: 2, name: "Sell elephant", isChecked: false },
  { id: 3, name: "Call to zoo", isChecked: false }
];

export default function Checkbox() {
  const [appState, setAppState] = useState(todoList);

  function handleCheckbox(e) {
    const {id} = e.target; 
    appState[id - 1].isChecked = !appState[id - 1].isChecked;
    setAppState([...appState])
    console.log(e.target.previousElementSibling.innerText, appState[id - 1].isChecked)
  }

  return (
    <div className="App">
      <h1>List</h1>
      {appState.map((box) => (
        <Item
          box={box}
          key={box.id}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </div>
  );
}

const Item = ({box, handleCheckbox,}) => {
  const {id, name} = box;
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input 
        id={id}
        type="checkbox"
        onChange={handleCheckbox}
      />
    </div>
  );
};