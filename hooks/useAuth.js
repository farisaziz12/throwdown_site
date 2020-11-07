// Provider hook that creates an auth object and handles it's state
import { useState, useEffect, useContext, createContext } from "react";
import { app, auth } from "../config/firebase";
import { signUpUser } from "../api"

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
        // Error sends push notifcation
        fetch("https://api.pushover.net/1/messages.json", {
                    method: "POST", 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: process.env.NEXT_PUBLIC_PUSHOVER_PROJECT_KEY,
                        user: process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY,
                        title: "Antidote Xmas Throwdown Log In Error",
                        message: `${email} had a login error ${error.message}`
                    })
          })
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
        signUpUser(email, firstName, lastName)
      })
      .catch((error) => {
        // Error sends push notification
        fetch("https://api.pushover.net/1/messages.json", {
                    method: "POST", 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: process.env.NEXT_PUBLIC_PUSHOVER_PROJECT_KEY,
                        user: process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY,
                        title: "Antidote Xmas Throwdown Sign Up Error",
                        message: `${email} had a sign up error ${error.message}`
                    })
          })
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
