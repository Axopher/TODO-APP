import { useState } from "react";

// this was for makeing a strike on item and removing the strike

// function ToDoItem(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.task}
//       </li>
//     </div>
//   );
// }

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
