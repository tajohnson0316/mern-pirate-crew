import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PirateView = (props) => {
  const { id } = useParams();
  const [pirate, setPirate] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/pirates/${id}`)
      .then((response) => {
        console.log("✔ GET REQUEST SUCCESSFUL =>", response.data.results);
        setPirate(response.data.results);
      })
      .catch((error) => {
        console.log("❌ERROR IN GET REQUEST =>", error);
      });
  }, [id]);

  return (
    <div>
      {pirate ? (
        <div>
          <div className="card mb-3 text-bg-dark">
            <div className="card-header text-center">
              <h1>{pirate.name}</h1>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-around align-items-start gap-5">
                <div className="col text-center">
                  <img
                    src={pirate.imgUrl}
                    alt=""
                    style={{
                      backgroundColor: "red",
                      maxWidth: "100%",
                      border: "2px solid black",
                    }}
                    className="mb-3"
                  />
                  <h2>"{pirate.catchPhrases}"</h2>
                </div>
                <div
                  className="col p-3"
                  style={{
                    border: "2px solid black",
                  }}
                >
                  <h3 className="text-center mb-4">About</h3>
                  <hr />
                  <div className="d-flex justify-content-start gap-3">
                    <p>
                      <span className="fw-bold">Position:</span>
                    </p>
                    <p>{pirate.crewPosition}</p>
                  </div>
                  <div className="d-flex justify-content-start gap-3">
                    <p>
                      <span className="fw-bold">Treasures:</span>
                    </p>
                    <p>{pirate.totalChests}</p>
                  </div>
                  <div className="d-flex justify-content-start gap-3">
                    <p>
                      <span className="fw-bold">Peg Leg:</span>
                    </p>
                    <p>{pirate.pegLeg ? "Yes" : "No"}</p>
                  </div>
                  <div className="d-flex justify-content-start gap-3">
                    <p>
                      <span className="fw-bold">Eye Patch:</span>
                    </p>
                    <p>{pirate.eyePatch ? "Yes" : "No"}</p>
                  </div>
                  <div className="d-flex justify-content-start gap-3">
                    <p>
                      <span className="fw-bold">Hook Hand:</span>
                    </p>
                    <p>{pirate.hookHand ? "Yes" : "No"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Return to Crew List</Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default PirateView;
