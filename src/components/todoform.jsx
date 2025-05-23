import { useState } from "react"


const Todoform = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const [caterogy, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title  || !caterogy) return;
        addTodo(title, caterogy)
        setTitle('')
        setCategory('')
        console.log(title, caterogy)

        
    }

  return (
    <div className='todo_form'>
        <h2>Criar Tarefa:</h2>
        <form  onSubmit={handleSubmit}>

<input type="text" value={title} placeholder='digite o titulo da tarefa '  onChange={(e) => setTitle(e.target.value)}/>
<select value={caterogy} onChange={(e) => setCategory(e.target.value)}>
<option value="">selecione uma categoria</option>
<option value="trabalho"> trabalho</option>
<option value="escola">escola</option>
<option value="pessoal">pessoal</option>


</select>

<button type='submit'>Criar tarefa</button>

        </form>
      
      
    </div>
  )
}

export default Todoform
