import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ({ name }) => {
  const navigate = useNavigate();

  const getBackHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="col-3">
        <button
          onClick={getBackHandler}
          style={{
            background: "none",
            border: "none",
            padding: "6px",
            cursor: "pointer",
          }}
        >
          <i className="fa-solid fa-arrow-left colorB "></i>
        </button>
      </div>
      <div className="col-9">
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default GoBack;
