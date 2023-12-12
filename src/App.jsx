import { Link, useLoaderData } from "react-router-dom"
import UseCoffee from "./UseCoffee/UseCoffee"
import { useState } from "react"



function App() {
  const lodedCoffee = useLoaderData()
  const [coffees , setCoffee] = useState(lodedCoffee)

  

  return (
    <>
      <div className="flex justify-center gap-8">
      <button className="btn btn-secondary mt-4">  <Link to={'/AddCoffee'}>ADD</Link></button>

     <button  className="btn btn-secondary mt-4"><Link to={'/useCoffee'}>Coffee</Link></button>
      </div>
      <h1 className="text-stone-950 mt-4 text-3xl font-bold text-center" >Our Popular Products</h1>
      <div className="grid lg:grid-cols-2 p-16  gap-6 gap-y-8  ">
        {
          coffees.map(Coffee => <UseCoffee
             useCoffee={Coffee}
             coffees={coffees}
             setCoffee={setCoffee}
             key={Coffee._id}></UseCoffee>)
        }
      </div>
     
    </>
  )
}

export default App
