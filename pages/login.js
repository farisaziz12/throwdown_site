import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import NavBar from "../components/Navbar";
import Metadata from "../components/Metadata";
import styles from "../styles/Home.module.css";
import { app } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";

export default function login() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async () => {
    auth.signIn(email, password);
    setNoPassword(false);
    setNoEmail(false);
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, []);

  if (user) {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <Metadata title="Xmas Throwdown Login" />
      <NavBar />
      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              value={email}
              onChange={(e) => {
                if (e.target.value === "") {
                  setNoEmail(true);
                  setEmail(e.target.value);
                } else {
                  setNoEmail(false);
                  setEmail(e.target.value);
                }
              }}
              type="email"
              className={noEmail ? "form-control is-invalid" : "form-control"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={register({
                required: "Please enter an email",
              })}
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide an email.
            </div>
            <small id="emailHelp" className="form-text text-muted">
              If you have a wod-with-faris account you can login using that.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              value={password}
              onChange={(e) => {
                if (e.target.value === "") {
                  setNoPassword(true);
                  setPassword(e.target.value);
                } else {
                  setNoPassword(false);
                  setPassword(e.target.value);
                }
              }}
              type="password"
              className={
                noPassword ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              ref={register({
                required: "Please enter a password",
                minLength: {
                  value: 6,
                  message: "Should have at least 6 characters",
                },
              })}
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a password.
            </div>
          </div>
          <div className="form-group form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
