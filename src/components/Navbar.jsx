import { Link } from "react-router-dom";
import loginUser from "../assets/user.png"
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div></div>
        <div className="nav space-x-4">
          <Link to="/">Home</Link>
          <Link to='/career'>Career</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className="login flex space-x-3 items-center">
          <div>
            <img src={loginUser} alt="" />
          </div>
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;