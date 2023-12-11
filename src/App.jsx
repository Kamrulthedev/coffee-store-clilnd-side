import { useLoaderData } from "react-router-dom"



function App() {
  const coffee = useLoaderData()

  

  return (
    <>
      
      <h1 className="text-stone-950 text-4xl font-bold" >HOT HOT Cool Coffee: {coffee.length}</h1>
     
    </>
  )
}

export default App
