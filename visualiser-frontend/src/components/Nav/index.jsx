import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
const Nav = () => {
  const location = useLocation();
  const [showButton, setShowButton] = useState(true);
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
                <button className="btn btn-outline-light" onClick={() => {}}>
                    Sign In
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    // tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  ></div>
                </li>
                <li className="nav-item">
                  <NavLink to='/login' className={location.pathname==="/login"?"hidden":""}>
                  <button className="btn btn-danger" onClick={()=>{setShowButton(!showButton)}}>
                      Add Patient Information
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
