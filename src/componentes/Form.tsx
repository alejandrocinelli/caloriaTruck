import { categories } from "../data/category"

const Form = () => {
  return (
    <form action="" className=" space-y-5 bg-white shadow p-10 rounded-lg" >
        <div className=" grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold" >Categoria</label>
            <select name="" id="category" className=" border border-slate-500 p-2 rounded-lg bg-white">
             {categories.map( categories => (
                <option 
                key={categories.id}
                value={categories.id}
                > {categories.name}</option>
             ))}
            </select>
        </div>
        <div className=" grid grid-cols-1 gap-3"> 
        <label htmlFor="activity" className="font-bold" >Actividad</label>
        <input type="text"
        id="activity" 
        className=" border border-slate-500 p-2 rounded-lg"
        placeholder="Ej Comida, jugos, Andar en Bici, Correr"
        />
        </div>

        <div className=" grid grid-cols-1 gap-3"> 
        <label htmlFor="calorie" className="font-bold" >Calorias</label>
        <input type="number"
        id="calorie" 
        className=" border border-slate-500 p-2 rounded-lg"
        placeholder="Calorias"
        />
        </div>
        <input type="submit" 
        className=" bg-gray-800 hover:bg-gray-900 w-full uppercase text-white font-bold p-2 cursor-pointer "
        value="Guardar Caloria o Actividad"
        />
    </form>
  )
}

export default Form