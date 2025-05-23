import { useState } from "react"
import './App.css'
import Todo from "./components/todo"
import Todoform from "./components/todoform"
import Search from "./components/search"
import Filter from "./components/filter"




export function App (){
    const  [todos, setTodos] = useState([
        {
            id:1,
            text:'ola react',
            category:'Trabalho',
            iscompleted:false
        },
         {
            id:2,
            text:'estudar projecto de tcc',
            category:'Escola',
            iscompleted:false
        },
         {
            id:3,
            text:'estudar react ',
            category:'Pessoal',
           iscompleted:false
        }
    ])
    const [ search, setSearch] = useState('')
    const [ filter, setFilter] = useState('All')
    const [ sort, setSort] = useState('Asc')

    const addTodo = (text, category) => {

        const newTodo = [...todos,{
          id: Math.floor(Math.random() * 100000),
          text,
          category,
          iscompleted: false,
        }]
        setTodos(newTodo)

    }
    const removeTodo = (id) => {
        const newTodos = [...todos]
        const filterTodos = newTodos.filter((todo) =>
         todo.id !== id ? todo : null)
        setTodos(filterTodos)

    }
    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo) => (
            todo.id === id?(todo.iscompleted = !todo.iscompleted):todo
        ))
        setTodos(newTodos)

    }
    
return (
<div className="app">
      <h1>Lista de tarefa</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo_list">
      {todos
      .filter((todo) => 
      filter === "All" 
      ? true
      :filter === 'completed' 
      ? todo.iscompleted
      :!todo.iscompleted
    )
    .sort((a, b) =>
        sort === "Asc"
    ? a.text.localeCompare(b.text)
    : b.text.localeCompare(a.text)
)
      .filter((todo) =>
      todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ).map((todo) => (
       
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/ >
      ))} 
      

    </div>
    <Todoform addTodo={addTodo}/>

</div>
)

}