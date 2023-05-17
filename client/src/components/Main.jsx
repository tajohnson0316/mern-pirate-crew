import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PiratePreview from "./PiratePreview";

const Main = (props) => {
  const { pirates, setPirates, removeFromDom } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/pirates")
      .then((response) => {
        console.log("✔ GET REQUEST SUCCESSFUL =>", response.data.results);
        setPirates(response.data.results);
      })
      .catch((error) => {
        console.log("❌ERROR IN GET REQUEST =>", error);
      });
  }, [setPirates]);

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1>Ye Olde Pirate Crew</h1>
          <button className="btn btn-primary">
            <Link className="text-reset text-decoration-none" to="pirates/new">
              Add Pirate
            </Link>
          </button>
        </div>
        <div className="card-body">
          {pirates.map((pirate) => {
            return (
              <PiratePreview
                key={pirate._id}
                pirate={pirate}
                removeFromDom={removeFromDom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
