
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    
         <div  className="todo" style={{textDecoration: todo.iscompleted ?"line-through":''}}>
            <div className="conteiner">
 <p>{todo.text}</p>
            <p className="category">({todo.category})</p>

            </div>
           

            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>completo</button>

                <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
            </div>

        </div>
    
  )
}

export default Todo
