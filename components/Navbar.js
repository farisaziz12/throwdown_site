import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("/");
  const auth = useAuth();
  const router = useRouter()

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Xmas Throwdown</a>
        <button
          name="navbar-collapse-btn"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={currentPage == "/" ? "nav-item active" : "nav-item"}>
              <Link href="/">
                <a onClick={() => setCurrentPage("/")} className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li
              className={
                currentPage == "/schedule" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/schedule">
                <a
                  onClick={() => setCurrentPage("/schedule")}
                  className="nav-link"
                >
                  Schedule
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Workouts
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/workouts/event-1">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-1")}
                    className={
                      currentPage == "/workouts/event-1"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    Event 1
                  </a>
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="/workouts/event-2">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-2")}
                    className={
                      currentPage == "/workouts/event-2"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    Event 2
                  </a>
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="/workouts/event-3">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-3")}
                    className={
                      currentPage == "/event-3"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    Event 3
                  </a>
                </Link>
              </div>
            </li>
            <li
              className={
                currentPage == "/about" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/about">
                <a
                  onClick={() => setCurrentPage("/about")}
                  className="nav-link"
                  tabIndex="-1"
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
          {auth.user ? (
            <button
              onClick={() => {
                auth.signOut()
                router.push("/")
              }}
              className="btn btn-outline-secondary my-2 my-sm-0"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="btn btn-outline-success my-2 my-sm-0">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
