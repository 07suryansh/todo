
function Todo({ deleteTodo, text}) {

    return (
        <div className="todo-content">  
            <span>{text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}
export default Todo;