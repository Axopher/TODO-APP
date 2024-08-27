import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Heading from "./Heading";
import InputArea from "./InputArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      if (inputText) {
        return [...prevItems, inputText];
      }

      return [...prevItems];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <Heading />

      <InputArea onAdd={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={uuidv4()}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            ></ToDoItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
