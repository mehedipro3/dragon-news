import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
  const { createNewUser, setUser , updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setError({ ...error, name: "Name must be 6 letters" })
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
          navigate("/");
        })
        .catch((error)=>{
          console.log(error);
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-4xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
          </div>
          {
              error.name && 
              (<label className="label text-xs text-red-500">
                {error.name}
              </label>
            )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input name="photo" type="text" placeholder="Photo-url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-center ">Allready Have An Account ? {" "} <Link to="/auth/login" className="text-red-500">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;