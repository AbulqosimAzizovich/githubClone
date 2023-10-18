import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";
import "./style.scss";

const index = () => {
  const { apiValue } = useContext(Context);
  const [array, setArray] = useState([]);

  const api = async () => {
    const request = await fetch(`https://api.github.com/users/${apiValue}`);
    const result = await request.json();
    setArray(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__content--section">
            <img
              src={array.avatar_url}
              alt="me"
              className="sidebar__content-img"
            />
            <span className="sidebar__content--round">
              <span className="sidebar__content--round-smile">
                <i className="bi bi-emoji-smile"></i>
              </span>
            </span>
            <div>
              <h3 className="sidebar__content-name">{array.name}</h3>
              <p className="sidebar__content-username">{array.login}</p>
            </div>
          </div>
          <p className="sidebar__content-bio">{array.bio}</p>
          <button className="sidebar__content-btn">Edit profile</button>
          <ul className="sidebar__content--list">
            <li className="sidebar__content--list--item">
              <span className="sidebar__content--list--item-icon">
                {" "}
                <i className="bi bi-people"></i>{" "}
              </span>
              <NavLink
                className="sidebar__content--list--item-link"
                to="/followers"
              >
                {array.followers} followers
              </NavLink>
            </li>
            <li className="sidebar__content--list--item">
              <NavLink
                className="sidebar__content--list--item-link"
                to="/following"
              >
                {array.following} following
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
