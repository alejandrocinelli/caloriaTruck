import Form from "./componentes/form"


function App() {

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
        <Form/>
      </div>
     </section>
    </>
  )
}

export default App
