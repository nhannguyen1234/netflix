import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const AuthContext = createContext();
export function AuthContextProvider({ chỉldren }) {
  const [user, setUser] = useState({});
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
    });
    return () => {
      unSubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ logOut, signUp, logIn, user }}>
      {chỉldren}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
