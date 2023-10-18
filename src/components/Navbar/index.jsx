import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {
  const [value, setValue] = useState(
    localStorage.getItem("key") || "abdulqosimazizovich"
  );
  const { state, setState, apiValue, setApiValue } = useContext(Context);

  const menuClick = () => {
    setState((state) => !state);
  };

  const valueObject = {
    value: value.trim().length === 0,
  };

  const Clicked = (e) => {
    e.preventDefault();
    if (!valueObject.value) {
      setApiValue(value);
      return;
    }
  };

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
      <header className="header">
        <nav className="nav">
          <span className="nav__left-menu" onClick={() => menuClick()}>
            {" "}
            <i className="bi bi-list"></i>{" "}
          </span>
          <div className="nav__left">
            <span className="nav__left-github">
              {" "}
              <i className="bi bi-github"></i>
            </span>
            {/* <form action="#" onSubmit={(event) => Clicked(event)}>
              <label className="nav__left-label" htmlFor="#">
                <input
                  className="nav__left-label-input"
                  type="search"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    localStorage.setItem("key", e.target.value);
                  }}
                  placeholder="Search or jump to..."
                />
                <button type="submit" className="nav__left-label-slash">
                  /
                </button>
              </label>
            </form> */}

            <ul className="nav__list">
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list--item-link"
                      : "nav__list--item-link hover"
                  }
                  to="/"
                >
                  Pull requests
                </NavLink>
              </li>
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list--item-link"
                      : "nav__list--item-link hover"
                  }
                  to="/"
                >
                  Issues
                </NavLink>
              </li>
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list--item-link"
                      : "nav__list--item-link hover"
                  }
                  to="/"
                >
                  Codespaces
                </NavLink>
              </li>
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list--item-link"
                      : "nav__list--item-link hover"
                  }
                  to="/"
                >
                  Marketplace
                </NavLink>
              </li>
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list--item-link"
                      : "nav__list--item-link hover"
                  }
                  to="/"
                >
                  Explore
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav__right">
            <form action="#" onSubmit={(event) => Clicked(event)}>
              <label className="nav__left-label" htmlFor="#">
                <input
                  className="nav__left-label-input"
                  type="search"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    localStorage.setItem("key", e.target.value);
                  }}
                  placeholder="Search or jump to..."
                />
                <button type="submit" className="nav__left-label-slash">
                  /
                </button>
              </label>
            </form>
            <span className="nav__right-bell">
              {" "}
              <i className="bi bi-bell"></i>{" "}
            </span>
            <div className="nav__right--icons">
              <span className="nav__right--icons-plus">
                {" "}
                <i className="bi bi-plus-lg"></i>{" "}
              </span>
              <span className="nav__right--icons-triangle">
                {" "}
                <i className="bi bi-caret-down-fill"></i>{" "}
              </span>
            </div>
            <span className="nav__right--round">
              <img
                className="nav__right--round-img"
                src={array.avatar_url}
                alt="avatar"
              />
              <span className="nav__right--round-triangle">
                {" "}
                <i className="bi bi-caret-down-fill"></i>{" "}
              </span>
            </span>
          </div>
        </nav>

        <div className={state ? "nav__menu d-block" : "d-none"}>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              localStorage.setItem("key");
            }}
            className="nav__menu-input"
            type="search"
            placeholder="Search GitHub"
          />

          <ul className="nav__ul">
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Pull Requests
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Issues
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Codespaces
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Sponsors
              </a>
            </li>
            <li className="nav__ul--item">
              <hr className="nav__ul--item-hr" />
              <a className="nav__ul--item-link" href="#">
                Settings
              </a>
              <hr className="nav__ul--item-hr" />
            </li>
          </ul>

          <div>
            <div className="nav__round">
              <img
                src="https://avatars.githubusercontent.com/u/115654496?v=4"
                alt="img"
                className="nav__round-img"
              />
              <p className="nav__round-user">abdulqosimazizovich</p>
            </div>
            <hr className="nav__round-hr" />
          </div>

          <div className="nav__sign">
            <span className="nav__sign-icon">
              {" "}
              <i className="bi bi-box-arrow-right"></i>{" "}
            </span>
            <p className="nav__sign-text">Sign Out</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
