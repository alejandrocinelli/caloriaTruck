import { useReducer, useEffect, useMemo } from "react"
import Form from "./componentes/Form"
import ActivityList from "./componentes/ActivityList"
import { ActivityReducer, initialState } from "./reducer/activityreduce"
import CalorieTrack from "./componentes/calorieTrack"


function App() {

const  [state, dispatch] = useReducer(ActivityReducer , initialState)

useEffect(()=> {
 
  
  localStorage.setItem('activities', JSON.stringify(state.activities))
   
}, [state.activities])

const canRestarApp = () => useMemo(()=> state.activities.length > 0 , [state.activities ])

  return (
    <>
     <header className=" bg-neutral-500 py-3">
      <div className=" max-w-4xl  mx-auto flex justify-between items-center ">
        <h1 className=" text-center text-xl font-bold text-white uppercase">
          Contador de Calorias
        </h1>
        <button className=" disabled:opacity-10 bg-slate-500 hover:bg-slate-600 cursor-pointer p-2 text-center rounded-lg text-sm font-bold text-white"
        disabled = {!canRestarApp()}
        onClick={() => dispatch({type : 'resetapp'}) }
        >
          Reiniciar App
        </button>
      </div>
     </header>
     <section className=" bg-slate-300 px-5 py-20 ">
      <div className=" m-auto max-w-4xl">
        <Form
        dispatch = {dispatch}
        state = { state}
        />
      </div>
     </section>

     <section className=" bg-gray-500 py-10">
        <div className=" mx-auto max-w-4xl">
          <CalorieTrack
          activities = {state.activities}
          />
        </div>
     </section>

     <section className=" mx-auto p-10 max-w-4xl">
      <ActivityList
      activities = {state.activities}
      dispatch = {dispatch}
      
      /> 
     </section>
    </>
  )
}

export default App
