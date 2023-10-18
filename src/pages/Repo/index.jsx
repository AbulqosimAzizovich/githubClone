import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import ItemPost from "./itemPost";
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
  const [limt, setLimt] = useState(20);
  const [point, setPoint] = useState(1);
  const firstPoint = limt * point;
  const lastPoint = firstPoint - limt;
  const lastPage = array.slice(lastPoint, firstPoint);
  const paginate = (pageNumber) => {
    setPoint(pageNumber);
  };

  return (
    <>
      <div className="repo">
        <div className="repo__up">
          <input
            className="repo__up-input"
            type="text"
            placeholder="Find a repository..."
          />
          <div className="repo__up--btns extraOne">
            <button className="repo__up--btns-btn">
              Type{" "}
              <span className="repo__up--btns-btn-drop">
                {" "}
                <i className="bi bi-caret-down-fill"></i>{" "}
              </span>{" "}
            </button>
            <button className="repo__up--btns-btn">
              Language{" "}
              <span className="repo__up--btns-btn-drop">
                {" "}
                <i className="bi bi-caret-down-fill"></i>{" "}
              </span>{" "}
            </button>
            <button className="repo__up--btns-btn">
              Sort{" "}
              <span className="repo__up--btns-btn-drop">
                {" "}
                <i className="bi bi-caret-down-fill"></i>{" "}
              </span>{" "}
            </button>
          </div>

          <button className="repo__up-lastBtn">
            {" "}
            <span className="repo__up-lastBtn-icon">
              {" "}
              <i className="bi bi-journal-bookmark"></i>{" "}
            </span>{" "}
            New
          </button>
        </div>

        <div className="repo__up--btns extraTwoo">
          <button className="repo__up--btns-btn">
            Type{" "}
            <span className="repo__up--btns-btn-drop">
              {" "}
              <i className="bi bi-caret-down-fill"></i>{" "}
            </span>{" "}
          </button>
          <button className="repo__up--btns-btn">
            Language{" "}
            <span className="repo__up--btns-btn-drop">
              {" "}
              <i className="bi bi-caret-down-fill"></i>{" "}
            </span>{" "}
          </button>
          <button className="repo__up--btns-btn">
            Sort{" "}
            <span className="repo__up--btns-btn-drop">
              {" "}
              <i className="bi bi-caret-down-fill"></i>{" "}
            </span>{" "}
          </button>
        </div>

        <ItemPost
          array={array}
          limt={limt}
          lastPage={lastPage}
          active={point}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default index;
