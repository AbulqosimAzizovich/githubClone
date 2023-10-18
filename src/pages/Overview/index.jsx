import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./style.scss";
const index = () => {
  const { apiValue } = useContext(Context);
  const [array, setArray] = useState([]);

  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const result = await request.json();
    setArray(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <div className="overview">
        <div className="overview__up">
          <p className="overview__up-text1">Popular repositories</p>
          <p className="overview__up-text2">Customize your pins</p>
        </div>

        <ul className="overview__list">
          {array.length > 0 ? (
            array.slice(19, 25).map((element, index) => (
              <li key={index} className="overview__list--item">
                <div className="overview__list--item--up">
                  <a
                    className="overview__list--item--up-link"
                    href={element.html_url}
                  >
                    {element.name}
                  </a>
                  <span className="overview__list--item--up-circle">
                    {element.visibility}
                  </span>
                </div>
                <p className="overview__list--item-text">
                  {element.description}
                </p>
                <div className="overview__list--item--down">
                  <p
                    className={`overview__list--item--down-text2 colors
                                    ${
                                      element.language === "JavaScript"
                                        ? "yellow"
                                        : element.language === "CSS"
                                        ? "purple"
                                        : element.language === "HTML"
                                        ? "red"
                                        : element.language === "SCSS"
                                        ? "pink"
                                        : ""
                                    }
                                    `}
                  >
                    {element.language}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <div className="loader__wrapper">
              {" "}
              <span className="loader"></span>{" "}
            </div>
          )}
        </ul>

       
      </div>
    </>
  );
};

export default index;
