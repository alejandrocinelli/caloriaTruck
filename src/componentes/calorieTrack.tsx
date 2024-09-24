import { useMemo } from "react"
import type { Activity } from "../types"
import CaloryDisplay from "./CaloryDisplay"

type CaloryProps = {
    activities: Activity[] ,
       
    
}

const calorieTrack = ({activities } : CaloryProps )  => {

    // logica de las calorias 

    const caloriasConsumidas = useMemo(()=>  activities.reduce( (total, activity ) => activity.category === 1 ?  Number(activity.calori) + total : total,0 ) ,[activities] )
    const caloriasQuemadas = useMemo(()=>  activities.reduce( (total, activity ) => activity.category === 2 ?  Number(activity.calori) + total : total,0 ) ,[activities] )
    const caloriasNet = useMemo( ()=> caloriasConsumidas - caloriasQuemadas, [activities])

    return (
    <>
    <h2 className=" text-white text-4xl text-center font-black">Resumen de Calorias</h2>

    <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloryDisplay 
        calories = {caloriasConsumidas}
        text = {"consumidas"}
        />
        <CaloryDisplay 
        calories = {caloriasQuemadas}
        text = {"Ejercicio"}
        />

        <CaloryDisplay 
        calories = {caloriasNet}
        text = {"diferencia"}
        />
        
    </div>


    </>
  )
}

export default calorieTrack