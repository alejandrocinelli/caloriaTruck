import { categories } from "../data/category"
import { useState } from "react"
import { Activity } from "../types"

const Form = () => {

  const [activity, setActivity] = useState <Activity> ({
    category : 1,
    name : "", 
    calori : 0
  })

  const handlerChange = (e :React.ChangeEvent<HTMLSelectElement>| React.ChangeEvent<HTMLInputElement> ) =>{
   //const isNumberField = ["category" , "name" ].includes(e.target.id)

       setActivity({
      ...activity, [e.target.id] :  e.target.value
    })
  }

  const isValidActivity = () =>{
    const {name , calori} = activity 
    //console.log(name + calori)
    return name.trim() !== '' && calori > 0 
    
  }
  return (
    <form action="" className=" space-y-5 bg-white shadow p-10 rounded-lg" >
        <div className=" grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold" >Categoria</label>
            <select name="" 
             id="category"
             value={activity.category}
             onChange={handlerChange}
             className=" border border-slate-500 p-2 rounded-lg bg-white">
             {categories.map( categories => (
                <option 
                key={categories.id}
                value={categories.id}
                > {categories.name}</option>
             ))}
            </select>
        </div>
        <div className=" grid grid-cols-1 gap-3"> 
        <label htmlFor="name" className="font-bold" >Actividad</label>
        <input type="text"
        id="name" 
        value={activity.name}
        onChange={handlerChange }
        className=" border border-slate-500 p-2 rounded-lg"
        placeholder="Ej Comida, jugos, Andar en Bici, Correr"
       
        />
        </div>

        <div className=" grid grid-cols-1 gap-3"> 
        <label htmlFor="calori" className="font-bold" >Calorias</label>
        <input type="number"
        id="calori" 
        value={activity.calori}
        onChange={handlerChange}
        className=" border border-slate-500 p-2 rounded-lg"
        placeholder="Calorias"
        />
        </div>
        <input type="submit" 
        className=" bg-gray-800 hover:bg-gray-900  w-full uppercase text-white font-bold p-2 
        cursor-pointer  disabled:opacity-10"
        value="Guardar Caloria o Actividad"
        disabled = {!isValidActivity()}
        
        />
    </form>
  )
}

export default Form