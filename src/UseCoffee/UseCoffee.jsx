import { Link } from "react-router-dom";


const UseCoffee = ({ useCoffee }) => {
    const { name, supplier, category, chef, taste, details, photo } = useCoffee;
    return (
        <div >


            <div className="w-[400px] h-60 border-2 items-center  p-4 card card-side bg-base-100 shadow-xl ">
                <figure><img className="h-[150px]" src={photo} alt="Movie" /></figure>
                <div className=" flex justify-between  w-full">
                  <div className="mt-12 ml-4">
                  <h2 className="card-title">{name}</h2>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                  </div>
                    <div className="card-actions mb-6 justify-end">
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item w-12 ">View</button>
                            <button className="btn join-item w-12">Edit</button>
                            <button className="btn w-12 join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseCoffee;