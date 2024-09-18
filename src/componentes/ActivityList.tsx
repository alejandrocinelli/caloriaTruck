import { Activity } from "../types"
import { categories } from "../data/category"
import { useMemo } from "react"

type activityListProp = {
    activities: Activity[] 
}
const ActivityList = ({ activities } : activityListProp) => {

    const categoriName = useMemo(()=> 
        (category : Activity["category"] )=> categories.map(cat => cat.id === category ? cat.name : "")  ,
     [activities])

  return ( 
    <>
     <h2 className=' text-4xl text-center font-bold  text-slate-600'>Comidas y Actividades</h2>

   {activities.map(activity =>(
    <div key={activity.id} className=" px-5 py-10 bg-white mt-5 flex  justify-between"  > 
        <div className=" space-y-2  relative">
            <p className= {`absolute -top-8 -left-8 px-10 py-2 text-white font-bold uppercase ${activity.category === 1 ?  'bg-green-600' : 'bg-red-500'}`}>
                {categoriName(+activity.category)}</p>
            <p className=" font-bold text-2xl pt-5">{activity.name}</p> 
            <p className="font-black text-xl text-gray-400">
                {activity.calori} {""}
                <span>Calorias</span>
            </p>

        </div>
    </div>
   ))}
   
    </> 
)
   
  
}

export default ActivityList