import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PiratePreview = (props) => {
  const { pirate, removeFromDom } = props;

  const deletePirate = () => {
    axios
      .delete(`http://localhost:8001/api/pirates/${pirate._id}`)
      .then((response) => {
        console.log("✔ DELETE REQUEST SUCCESSFUL =>", response.data.results);
        removeFromDom(pirate._id);
      })
      .catch((error) => {
        console.log("❌ERROR IN DELETE REQUEST =>", error);
      });
  };

  return (
    <div
      style={{
        minHeight: "150px",
        backgroundColor: "lightyellow",
        border: "2px solid black",
      }}
      className="d-flex justify-content-around align-items-center mb-3 p-2"
    >
      <div className="col-lg-1">
        <img
          src={pirate.imgUrl}
          alt=""
          style={{
            backgroundColor: "red",
            maxWidth: "175px",
            border: "2px solid black",
          }}
        />
      </div>
      <div className="col-lg-4">
        <h3 className="text-center">{pirate.name}</h3>
        <hr />
        <div className="d-flex justify-content-around gap-3">
          <button className="btn btn-primary">
            <Link
              className="text-reset text-decoration-none"
              to={`pirates/view/${pirate._id}`}
            >
              View Pirate
            </Link>
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => deletePirate(pirate._id)}
          >
            Walk the Plank!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PiratePreview;
