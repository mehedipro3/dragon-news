import { createContext, useEffect, useState } from "react";
import auth from "../components/firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);

  const createNewUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const userLogin = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });
    return  ()=>{
      unsub();
    }
  },[])


  const logOut = () =>{
    signOut(auth);
  }

  const authInfo ={
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;