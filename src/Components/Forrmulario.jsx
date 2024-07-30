import {useState} from "react";
import Swal from "sweetalert2";


const Formulario =({addTodo})=>{



  //const[title,setTitle] = useState('')
 // const[description,setDescription] = useState('')
 // const[state,setState] = useState('pendiente')

 const[todo,setTodo] = useState({
    title:'Todo#01',
    description:'descripcion#01',
    state:'pendiente ',
    priority:true

 })

 const{title,description,state,priority} =todo


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!title.trim()  || !description.trim())
        {
            return Swal.fire({
                title: "Error!",
                text: "Título y descripción son obligatorios",
                icon: "error",
            });

            

        }
        addTodo({
            id:Date.now(),
            ...todo,
            state:state === 'completado' 
        })
        //console.log(title,state,description,state)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con éxito",
            showConfirmButton: false,
            timer: 1500,
        });

    }

    const handleChange = (e) =>{
        //console.log(e.target.value)
       // console.log(e.target.name)
       //setTodo({...todo,priority:e.target.checked})

       // desestructuracion de objeto del target en cada propiedad

       const {name,type,checked,value} = e.target

       // todo["title"]

        setTodo({
            ...todo,
          [name]: type === 'checkbox' ? checked : value,
      })

    }
    return(
    
        <form onSubmit={(e) =>handleSubmit(e)}>

            <div className="form-check mb-2"> 
                <input type="checkbox" 
                       name="priority" 
                       className="form-check-input" 
                       id="inputCheck"
                       checked={priority}
                       onChange={handleChange}/>

                <label htmlFor="inputCheck">Dark prioridad</label>
            </div>
             <input onChange={handleChange} 
                    value={title} 
                    placeholder="Ingrese Todo" 
                    className="form-control mb-2" 
                    name="title"/>

             <textarea onChange={handleChange} 
                       value={description} 
                       className="form-control mb-2" 
                       placeholder="Ingrese descripción" 
                       name="descriptión "/>

             <select onChange={handleChange} 
                     value={state} 
                     className="form-select mb-2" 
                     name="state">
                <option value="pendiente ">Pendiente</option>
                <option value="completado">Completado</option>
             </select>
             <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    )
}

export default Formulario;