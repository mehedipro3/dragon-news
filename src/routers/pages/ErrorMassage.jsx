import { Link } from "react-router-dom";



const ErrorMassage = () => {
   
  return (
    <div className="container mx-auto mt-32 text-center">
      <h1 className="text-9xl my-auto font-bold mb-5">Oops!</h1>
      <h3 className="text-3xl mb-2">404 - PAGE NOT FOUND</h3>
      <p className=" text-gray-400 mb-3">The page You Are Looking for might have been removed <br /> had its change or its temporarily unavailable</p>
      <Link to={"/"} className="btn bg-blue-600 text-white">Go to Home Page</Link>
    </div>
  );
};

export default ErrorMassage;