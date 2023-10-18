import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const { apiValue } = useContext(Context);
  const [array, setArray] = useState([]);

  useEffect(() => {}, [apiValue]);

  return (
    <>
      <div className={!(scrollY > 370) ? "sideUP" : "sideUP zindex"}>
        <div className="sideup">
          <div className="sideup__user">
            <p
              className={
                !(scrollY > 380)
                  ? "sideup__user-text d-none"
                  : "sideup__user-text d-block"
              }
            >
              <strong>{array.login}</strong>
            </p>
          </div>

          <ul className="sideup__list">
            <li className="sideup__list--item">
              <span className="sideup__list--item-icon me-2">
                {" "}
                <i className="bi bi-book"></i>{" "}
              </span>
              <NavLink className="sideup__list--item-link" to="/">
                Overview
              </NavLink>
            </li>

            <li className="sideup__list--item">
              <span className="sideup__list--item-icon me-2">
                {" "}
                <i className="bi bi-journal-bookmark"></i>{" "}
              </span>
              <NavLink className="sideup__list--item-link" to="/repositories">
                Repositories
              </NavLink>
            </li>

            <li className="sideup__list--item itemthree">
              <span className="sideup__list--item-icon me-2">
                {" "}
                <i className="bi bi-border-all"></i>{" "}
              </span>
              <NavLink className="sideup__list--item-link" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="sideup__list--item itemtwoo">
              <span className="sideup__list--item-icon me-2">
                {" "}
                <i className="bi bi-box"></i>{" "}
              </span>
              <NavLink className="sideup__list--item-link" to="/packages">
                Packages
              </NavLink>
            </li>

            <li className="sideup__list--item itemLast">
              <span className="sideup__list--item-icon me-2">
                {" "}
                <i className="bi bi-star"></i>{" "}
              </span>
              <NavLink className="sideup__list--item-link" to="/stars">
                Stars
              </NavLink>
            </li>
          </ul>

          <span className="sideup-dots">
            {" "}
            <i className="bi bi-three-dots"></i>{" "}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default index;
