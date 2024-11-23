import { Link } from "react-router-dom";
import loginUser from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>{user && user.email}</div>
        <div className="nav space-x-4">
          <Link to="/">Home</Link>
          <Link to='/career'>Career</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className="login flex space-x-3 items-center">
          <div>
            <img src={loginUser} alt="" />
          </div>
          {
            user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">LogOut</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;