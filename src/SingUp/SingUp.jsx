import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Porviders/AuthProder";
import Swal from "sweetalert2";


const SingUp = () => {

  const { createUser } = useContext(AuthContext)



  const hadlerSingUp = e => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
 


    // create user Login
    createUser(email, password)
      .then(result => {
        console.log(result.user);


        // new user has been created
        const userAt = result.user?.metadata.creationTime;
        const user = { email, userAt };
        fetch('https://coffee-store-server-six-lake.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'success',
                text: 'Users Added successful',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
          .catch(error => {
            console.error('Error saving user information:', error);

          });
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  return (
    <div>
      <div>
        <Link className="btn btn-secondary flex justify-center" to={'/'}>Back</Link>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hadlerSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;