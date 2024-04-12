import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
const updateName = (name)=>{
  return updateProfile(auth.currentUser, {
    displayName: name
  })
}
const updatePhoto = (image)=>{
  return updateProfile(auth.currentUser, {
    photoURL: image
  })
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
    loginWithEmail,
    setUser,
    updateName,
    updatePhoto
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
