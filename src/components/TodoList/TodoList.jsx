import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({ deleteTodo }) {

    const todos = useSelector(state =>{
        return state.todos.todoList
    })

    function onDeleteTodo(id) {
        deleteTodo({id});
    }

    // function onEditTodo(id, newTodo) {
    //     editTodo({id, newTodo})
    // }

    // function onFinishTodo(id, state) {
    //     finishTodo({id, state})
    // }

    return (
        <div className="todo-list">
        {todos && todos.map(
            (todo) => <Todo
                        className="todo-content" 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished} 
                        deleteTodo={() => onDeleteTodo(todo.id)}
        />)}
        </div>
    );
}

export default TodoList;