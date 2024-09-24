import { useMemo } from "react"
import type { Activity } from "../types"


type CaloryProps = {
    activities: Activity[] ,
       
    
}

const calorieTrack = ({activities } : CaloryProps )  => {

    // logica de las calorias

    const caloriasConsumidas = useMemo(()=>  activities.reduce( (total, activity ) => activity.category === 1 ?  Number(activity.calori) + total : total,0 ) ,[activities] )
  return (
    <>
    <h2 className=" text-white text-4xl text-center font-black">Resumen de Calorias</h2>
    <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        
        <p className=" text-white font-bold rounded-full text-center grid grid-cols-1 gap-3 ">
            <span className=" text-center text-2xl font-black text-orange">
                {caloriasConsumidas}
            </span>
        </p>
    </div>


    </>
  )
}

export default calorieTrack