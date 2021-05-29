import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import API from "../../utils/API";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUser,
  faFileMedical,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const { state, dispatch } = useContext(UserContext);
  const location = useLocation();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch({ type: "USER", payload: token });
    if (token) {
      API.userDetail()
        .then((res) => {
          setUsername(res.data.name);
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  }, [localStorage.getItem("token")]);

  const logoutHandler = (e) => {
    e.preventDefault();
    API.signOut().then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    });
  };

  if (state.token) {
    return (
      <div>
        <div className="bg-primary">
          <nav className="col-10 mx-auto navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
              VISUALISER           
            </a>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <p id="userName">
                      <FontAwesomeIcon icon={faUser} /> {username}
                    </p>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/addInformation"
                      className={
                        location.pathname === "/addInformation" ||
                        location.pathname === "/login" ||
                        location.pathname === "/registration"
                          ? "hidden"
                          : ""
                      }
                    >
                      <button
                        className="btn btn-info"
                        title="add Patient information"
                      >
                        <FontAwesomeIcon icon={faFileMedical} /> Patient
                      </button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={location.pathname === "/" ? "hidden" : ""}
                    >
                      <button className="btn btn-outline-warning">Back</button>
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="btn btn-danger"
                      onClick={logoutHandler}
                      title="sign out"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="bg-primary">
          <nav className="col-10 mx-auto navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
              VISUALISER
            </a>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className={location.pathname === "/login" ? "hidden" : ""}
                    >
                      <button
                        className="btn btn-success"
                        onClick={() => {}}
                        title="sign in"
                      >
                        <FontAwesomeIcon icon={faSignInAlt} />
                      </button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/registration"
                      className={
                        location.pathname === "/registration" ? "hidden" : ""
                      }
                    >
                      <button
                        className="btn btn-light"
                        onClick={() => {}}
                        title="sign up"
                      >
                        <FontAwesomeIcon icon={faUserPlus} /> sign up
                      </button>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/addInformation"
                      className={
                        location.pathname === "/addInformation" ||
                        location.pathname === "/login" ||
                        location.pathname === "/registration"
                          ? "hidden"
                          : ""
                      }
                    >
                      <button
                        className="btn btn-info"
                        title="add patient information"
                      >
                        <FontAwesomeIcon icon={faFileMedical} /> Patient
                      </button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={location.pathname === "/" ? "hidden" : ""}
                    >
                      <button className="btn btn-outline-warning">Back</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
};

export default Nav;
