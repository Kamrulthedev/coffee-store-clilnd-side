import { Link, useLoaderData } from "react-router-dom"



function App() {
  const coffee = useLoaderData()

  

  return (
    <>
      <div className="flex justify-center gap-8">
      <button className="btn btn-secondary">  <Link to={'/AddCoffee'}>ADD</Link></button>
     <button className="btn btn-secondary">   <Link to={'/UpdateCoffee'}>UPDATE</Link></button>
      </div>
      <h1 className="text-stone-950 text-4xl font-bold" >HOT HOT Cool Coffee: {coffee.length}</h1>
     
    </>
  )
}

export default App
