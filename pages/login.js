import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import NavBar from "../components/Navbar";
import Metadata from "../components/Metadata";
import styles from "../styles/Home.module.css";
import { app } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import { Subject, timer } from "rxjs";
import { debounce, filter } from "rxjs/operators";

const emailStream = new Subject();

export default function login() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [noFirstName, setNoFirstName] = useState(false);
  const [noLastName, setNoLastName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [noConfirmPassword, setNoConfirmPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [existingAccount, setExitstingAccount] = useState(false);
  const [noPasswordMatch, setNoPasswordMatch] = useState(false);

  const router = useRouter();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  useEffect(() => {
    if (password && confirmPassword) {
      if (confirmPassword !== password) {
        setNoPasswordMatch(true);
      } else {
        setNoPasswordMatch(false);
      }
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    let subscription;
    if (createAccount) {
      subscription = emailStream
        .pipe(
          filter((email) => email !== ""),
          debounce(() => timer(750))
        )
        .subscribe(async (email) => {
          const foundAccount = await fetch(
            `https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${email}`
          ).then((resp) => resp.json());
          if (foundAccount) {
            setExitstingAccount(true);
          } else {
            setExitstingAccount(false);
          }
        });
      return () => subscription.unsubscribe();
    }
  }, [createAccount]);

  const onSubmitLogin = () => {
    auth.signIn(email, password);
    setNoPassword(false);
    setNoEmail(false);
  };

  const onSubmitSignup = () => {
    auth.signUp(firstName, lastName, email, password);
    setNoPassword(false);
    setNoEmail(false);
  };

  if (user) {
    router.push("/");
  }
  const formComplete =
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    noPasswordMatch === false &&
    existingAccount == false
      ? true
      : false;

  return (
    <div className={styles.container}>
      <Metadata title="Xmas Throwdown Login" />
      <NavBar />
      <main className={styles.main}>
        <button
          onClick={() => setCreateAccount(!createAccount)}
          type="button"
          className="btn btn-dark"
        >
          {createAccount
            ? "Have an account? Click here to login"
            : "Don't have an account? Click here to create one!"}
        </button>
        {!createAccount ? (
          <form
            className={styles.margintop}
            onSubmit={handleSubmit(onSubmitLogin)}
          >
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
        ) : (
          <form
            className={styles.margintop}
            onSubmit={handleSubmit(onSubmitSignup)}
          >
            <div className="form-group">
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input
                name="first-name"
                value={firstName}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setNoFirstName(true);
                    setFirstName(e.target.value);
                  } else {
                    setNoFirstName(false);
                    setFirstName(e.target.value);
                  }
                }}
                type="text"
                className={
                  noFirstName ? "form-control is-invalid" : "form-control"
                }
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide your first name.
              </div>
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input
                name="last-name"
                value={lastName}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setNoLastName(true);
                    setLastName(e.target.value);
                  } else {
                    setNoLastName(false);
                    setLastName(e.target.value);
                  }
                }}
                type="text"
                className={
                  noLastName ? "form-control is-invalid" : "form-control"
                }
                id="exampleInputLastName"
                aria-describedby="emailHelp"
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide your last name.
              </div>
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
                    emailStream.next(e.target.value);
                  }
                }}
                type="email"
                className={noEmail ? "form-control is-invalid" : "form-control"}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide an email.
              </div>
              {existingAccount && (
                <div class="alert alert-danger" role="alert">
                  An account with this email already exits. Try logging in.
                </div>
              )}
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
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setNoConfirmPassword(true);
                    setConfirmPassword(e.target.value);
                  } else {
                    setNoConfirmPassword(false);
                    setConfirmPassword(e.target.value);
                  }
                }}
                type="password"
                className={
                  noConfirmPassword ? "form-control is-invalid" : "form-control"
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
                Please confirm password.
              </div>
              {noPasswordMatch && (
                <div class="alert alert-danger" role="alert">
                  Passwords do not match.
                </div>
              )}
            </div>
            <div className="form-group form-check"></div>
            <button
              disabled={!formComplete}
              type="submit"
              className="btn btn-primary"
            >
              Create Account
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
