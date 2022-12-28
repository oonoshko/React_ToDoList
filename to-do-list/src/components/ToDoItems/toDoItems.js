import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

function TodoItem(props) {
  const { todo, removeTodo, completeTodo, importantTodo } = props;
  if (todo.text.trim() !== "") {
    return (
      <div
        className={todo.completed ? "todo-row complete" : "todo-row"}
        style={todo.important ? { background: "orange" } : {}}
      >
        {todo.text}
        <div className="iconsContainer">
          <button
            onClick={() => importantTodo(todo.id)}
            className="important-btn"
          >
            !
          </button>
          <BiCheckCircle onClick={() => completeTodo(todo.id)} />
          <RiCloseCircleLine
            style={{ marginRight: 5 }}
            onClick={() => removeTodo(todo.id)}
          />
        </div>
      </div>
    );
  } else {
    return (todo.text = "");
  }
}

export default TodoItem;
