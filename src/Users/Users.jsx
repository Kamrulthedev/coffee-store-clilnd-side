import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const lodedUser = useLoaderData()
    const [users, setUsers] = useState(lodedUser)

    const handlerDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-six-lake.vercel.app/user/${id}`,
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
                              const remaining = users.filter( cof=>cof._id !== id)
                              setUsers(remaining)

                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <Link className="btn btn-secondary flex justify-center" to={'/'}>Back</Link>
            </div>
            <div>
                <h3 className="text-center text-2xl font-semibold"> My Website Users History:{lodedUser.length}</h3>
                <div className="overflow-x-auto">
                    <table className="lg:table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>email</th>
                                <th>userAt</th>
                                <th>Last Loggin In</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user =>
                                    <tr key={user._id}>
                                        <th>1</th>
                                        <td>{user.email}</td>
                                        <td>{user.userAt}</td>
                                        <th>{user.lastLoggedAt}</th>

                                        <td>
                                            <button onClick={() => handlerDelete(user._id)} className="btn btn-xs bg-lime-500">X</button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;