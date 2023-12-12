import PropTypes from 'prop-types'; // ES6

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UseCoffee = ({ useCoffee, setCoffee, coffees }) => {
    const { _id, name, supplier, chef, taste,  photo } = useCoffee;

    const handlerDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,
                {
                    method:'DELETE',
                  
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                              });
                              const remaining = coffees.filter( cof=>cof._id !== _id)
                              setCoffee(remaining)

                        }
                    })
            }
        });
    }




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
                          <Link to={`/UpdateCoffee/${_id}`}>  <button className="btn join-item w-12">Edit</button></Link>
                            <button
                                onClick={() => handlerDelete(_id)}
                                className="btn w-12 join-item bg-orange-600">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
UseCoffee.propTypes = {
    useCoffee: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        supplier: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        chef: PropTypes.string.isRequired,
        taste: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
    setCoffee: PropTypes.func.isRequired,
    coffees: PropTypes.array.isRequired,
};

export default UseCoffee;