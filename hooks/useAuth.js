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

  const signUp = (firstName, lastName, email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        auth.currentUser.sendEmailVerification();
        return setUser(response.user);
      })
      .then(() => {
        fetch("https://wod-with-faris-backend.herokuapp.com/user/create", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            first_name: firstName,
            last_name: lastName,
            tokens: 0,
            coach: false,
          }),
        })
          .then((resp) => resp.json())
          .then((resp) => console.log(resp));
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
