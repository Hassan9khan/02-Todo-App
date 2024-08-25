// import { useState , useRef} from "react"

// const App = () =>{
  
  //   const [ todo , setTodo ] = useState([])
  //   const todoVal = useRef()
  //   const email = useRef()
  //   const addTodo = (event) =>{
//     event.preventDefault()
//     console.log(todoVal.current.value);
//     console.log(email.current.value);

//   }
//  return(
//   <>
//   <h1>Hello Todo</h1>
//   <form onSubmit={addTodo}>
//     <input type="text" placeholder="Enter your name" ref={todoVal} />
//     <input type="email" placeholder="Enter your email" ref={email} />
//     <button type="Submit">Submit</button>
//   </form>
//   </>
//  ) 
// }

// export default App

import { useRef, useState } from "react"


const App = () =>{

  const [ todo , setTodo] = useState([])
  const todoVal = useRef()
  const addTodo = (event) =>{
    event.preventDefault()
    todo.push(todoVal.current.value)
    setTodo([...todo])
    console.log(todo);
    todoVal.current.value = ""
  }

  const deleteTodo = (index)=>{
    console.log("delete" , index);
    todo.splice(index,1)
    setTodo([...todo])
    
  }
  const editTodo = (index) =>{
    console.log("edit" , index);
    const edited = prompt('edit the value')
    todo.splice(index , 1 , edited)
    setTodo([...todo])
    
  }

  
  return(
    <>
    <h1>Hello Todo</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter your name" ref={todoVal} />
      <button type="submit">submit</button>
    </form>
    <ul>
      {todo.map((item , index ) =>{
        return <div key={index}>
            <li>{item}</li>
            <button onClick={()=> deleteTodo(index)}>delete</button>
            <button onClick={()=> editTodo(index)}>edit</button>
          </div>         
      })}
    </ul>
    </>
  )
}

export default App