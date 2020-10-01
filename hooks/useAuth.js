// Provider hook that creates an auth object and handles it's state
import { useState, useEffect, useContext, createContext } from "react";
import { app, auth } from "../config/firebase";
import { appendErrors } from "react-hook-form";

const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{children}</Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  if (app) {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      }
    });
  }

  const signIn = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = () => {
    return auth.signOut().then(() => setUser(false));
  };

  const signUp = ({ name, email, password }) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        auth.currentUser.sendEmailVerification();
        return setUser(response.user);
      })
      .catch((error) => {
        return { error };
      });
  };
  return {
    user,
    signUp,
    signIn,
    signOut,
  };
};
