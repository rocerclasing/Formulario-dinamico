import { useRef ,useState} from "react";

const NoControlados =()=>{

    
    const form = useRef(null)
    const [error,setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(form.current)
        //capturar un elemento en forma manual  en el dom usar useref
        //console.log(new FormData(form.current))
        
        //Capturar los datos 
        const data = new FormData(form.current)
        //console.log(...data.entries())

        const {title,description,state} = Object.fromEntries([...data.entries()]);
        //console.log([...data.entries()]);
        console.log({title,description,state})

        //Validar los datos
        if(!title.trim() || !description.trim() || !state.trim()) return setError('Llenar todos los campos')


    
        //enviar los datos

    }
    return(
    
        <form onSubmit={(e) =>handleSubmit(e)} ref={form}>
       
             <input type="" placeholder="Ingrese Todo" className="form-control mb-2" name="title"/>
             <textarea className="form-control mb-2" placeholder="Ingrese descripción" name="descriptión "/>
             <select className="form-select mb-2" name="state">
                <option value="pendiente ">Pendiente</option>
                <option value="completado">Completado</option>
             </select>

             <button type="submit" className="btn btn-primary">Procesar</button>
             {
                error !== ''&& error
             }

        </form>
    )
}

export default NoControlados;