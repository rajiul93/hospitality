import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  

  const googleLogin = () => {
   return signInWithPopup(auth, googleProvider);
  };

const createWithEmailPassword =(email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password);
}

const loginWithEmail=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}
  const logOut =()=>{
    return signOut(auth)
  
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    googleLogin,
    logOut,
    createWithEmailPassword,
    loginWithEmail
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
