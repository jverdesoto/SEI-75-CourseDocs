import ToDoListItem from "./ToDoListItem";



export default function ToDoList({todos}) {

// const str = "SEI"
// const score = 94
// const misc = ['hello', 123, true, <div>SEI</div>]

// const toDoListItems = todos.map(t => <ToDoListItem todo={t}/>)

    return (
        <ul>
          {/* <ToDoListItem />
          <ToDoListItem /> */}
          {/* <li>{misc}</li> */}
          {/* <li>Number: {score}</li>
          <li>String: {str}</li>
          <li>Math.random(): {Math.random() * 100}</li>
          <li>Template Literals: {`${str} Rocks!`}</li>
          <li>Ternary Expression: {score > 90 ? 'A' : 'B'}</li>
          <li>Booleans, null & undefined: {true}{false}{null}{undefined}</li>
          <li>Logical &&: {score < 90 && <div>Got an 'A'!</div>}</li> */}
          {todos.map((t, idx) => (
          <ToDoListItem todo={t} index={idx} key={idx}/>
          ))}
        </ul>
      );
}
