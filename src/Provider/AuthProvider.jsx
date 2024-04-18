import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider  = new TwitterAuthProvider()

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true) 
const twitterLogin =()=>{
  return signInWithPopup(auth, twitterProvider)
}
  const googleLogin = () => {
    // setLoader(true)

    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGitHub = () => {
    // setLoader(true)

    return signInWithPopup(auth, gitHubProvider);
  };
  const createWithEmailPassword = (email, password) => {
    // setLoader(true)

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    // setLoader(true)

    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const updatePhoto = (image) => {
    return updateProfile(auth.currentUser, {
      photoURL: image,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoader(true)
      setUser(user);
      setLoader(false)
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
    updatePhoto,
    loginWithGitHub,
    loader,twitterLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
children: PropTypes.node
}