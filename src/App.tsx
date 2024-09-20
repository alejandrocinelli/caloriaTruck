import { useReducer } from "react"
import Form from "./componentes/form"
import ActivityList from "./componentes/ActivityList"
import { ActivityReducer, initialState } from "./reducer/activityreduce"


function App() {

const  [state, dispatch] = useReducer(ActivityReducer , initialState)

  return (
    <>
     <header className=" bg-neutral-500 py-3">
      <div className=" max-w-4xl  mx-auto flex justify-between ">
        <h1 className=" text-center text-xl  font-bold text-white uppercase">
          Contador de Calorias
        </h1>
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
