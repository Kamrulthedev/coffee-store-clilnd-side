import { Link, useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {name, supplier, category, chef, taste, details, photo} = coffee


    return (
        <div>
            <div>
                <Link className="btn btn-secondary flex text-center" to={'/AddCoffee'}>Back</Link>
            </div>
         <div>
              <h1>Coffee: {name}</h1>

         </div>
        </div>
    );
};

export default UpdateCoffee;