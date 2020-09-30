import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <div className={styles.navbar}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Xmas Throwdown</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class={currentPage == "/" ? "nav-item active" : "nav-item"}>
              <Link href="/">
                <a onClick={() => setCurrentPage("/")} class="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li
              class={
                currentPage == "/schedule" ? "nav-item active" : "nav-item"
              }
            >
              <Link href="/schedule">
                <a onClick={() => setCurrentPage("/schedule")} class="nav-link">
                  Schedule
                </a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Workouts
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="workouts/event-1">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-1")}
                    class={
                      currentPage == "/workouts/event-1"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    Event 1
                  </a>
                </Link>
                <div class="dropdown-divider"></div>
                <Link href="workouts/event-2">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-2")}
                    class={
                      currentPage == "/workouts/event-2"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    Event 2
                  </a>
                </Link>
                <div class="dropdown-divider"></div>
                <Link href="workouts/event-3">
                  <a
                    onClick={() => setCurrentPage("/workouts/event-3")}
                    class={
                      currentPage == "/workouts/event-3"
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
              class={currentPage == "/about" ? "nav-item active" : "nav-item"}
            >
              <Link href="/about">
                <a
                  onClick={() => setCurrentPage("/about")}
                  class="nav-link"
                  tabindex="-1"
                >
                  About
                </a>
              </Link>
            </li>
          </ul>

          <button class="btn btn-outline-success my-2 my-sm-0">Login</button>
        </div>
      </nav>
    </div>
  );
}
