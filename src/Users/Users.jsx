import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const lodedUser = useLoaderData()
    const [users, setUsers] = useState(lodedUser)


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
                                <th></th>

                                <td>
                                    <button className="btn btn-xs bg-lime-500">X</button>
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