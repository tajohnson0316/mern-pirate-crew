import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PirateForm = (props) => {
  const navigate = useNavigate();

  const { pirates, setPirates } = props;

  const [pirateName, setPirateName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [totalChests, setTotalChests] = useState(0);
  const [catchphrases, setCatchphrases] = useState("");
  const [crewPosition, setCrewPosition] = useState("");
  const [pegLeg, setPegLeg] = useState(true);
  const [eyePatch, setEyePatch] = useState(true);
  const [hookHand, setHookHand] = useState(true);

  const [errors, setErrors] = useState([]);

  const createPirate = (e) => {
    e.preventDefault();

    const newPirate = {
      name: pirateName,
      imgUrl,
      totalChests,
      catchPhrases: catchphrases,
      crewPosition,
      pegLeg,
      eyePatch,
      hookHand,
    };

    axios
      .post("http://localhost:8001/api/pirates", newPirate)
      .then((response) => {
        console.log("✔ POST REQUEST SUCCESSFUL =>", response);
        setPirates([...pirates, response.data.results]);
        navigate(`/pirates/view/${response.data.results._id}`);
      })
      .catch((error) => {
        console.log("❌ERROR IN SERVER RESPONSE =>", error);
        const errorResponse = error.response.data.errors; // Get the errors from error.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <div className="card border-info">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1>Add Pirate</h1>
          <button className="btn btn-warning">
            <Link className="text-decoration-none text-reset" to="/">
              Return to Crew Board
            </Link>
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={createPirate}>
            <div className="text-danger fw-bold">
              {errors.map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
            <div className="d-flex justify-content-around align-items-start gap-5">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="pirateName" className="form-label">
                    Pirate Name:
                  </label>
                  <input
                    type="text"
                    name="pirateName"
                    id="pirateName"
                    className="form-control"
                    value={pirateName}
                    onChange={(e) => setPirateName(e.target.value)}
                  />
                  <p className="text-danger">
                    {pirateName.length > 0 && pirateName.length < 2
                      ? "This field requires at least (2) characters"
                      : ""}
                  </p>
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image URL:
                  </label>
                  <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    className="form-control"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalChests" className="form-label">
                    # of Treasure Chests:
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="totalChests"
                    id="totalChests"
                    className="form-control"
                    value={totalChests}
                    onChange={(e) => setTotalChests(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="catchphrases" className="form-label">
                    Catchphrase:
                  </label>
                  <input
                    type="text"
                    name="catchphrases"
                    id="catchphrases"
                    className="form-control"
                    value={catchphrases}
                    onChange={(e) => setCatchphrases(e.target.value)}
                  />
                  <p className="text-danger">
                    {catchphrases.length > 0 && catchphrases.length < 3
                      ? "This field requires at least (3) characters"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="col mt-3">
                <div className="mb-3">
                  <div className="mb-3">
                    <select
                      name="crewPosition"
                      id="crewPosition"
                      className="form-select"
                      onChange={(e) => setCrewPosition(e.target.value)}
                    >
                      <option value="" defaultValue={true}>
                        Crew Position
                      </option>
                      <option value="Captain">Captain</option>
                      <option value="First Mate">First Mate</option>
                      <option value="Quarter Master">Quarter Master</option>
                      <option value="Boatswain">Boatswain</option>
                      <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="pegLeg"
                      defaultChecked={true}
                      onChange={(e) => setPegLeg(e.target.checked)}
                    />
                    <label htmlFor="pegLeg" className="form-check-label">
                      Peg Leg
                    </label>
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="eyePatch"
                      defaultChecked={true}
                      onChange={(e) => setEyePatch(e.target.checked)}
                    />
                    <label htmlFor="eyePatch" className="form-check-label">
                      Eye Patch
                    </label>
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="hookHand"
                      defaultChecked={true}
                      onChange={(e) => setHookHand(e.target.checked)}
                    />
                    <label htmlFor="hookHand" className="form-check-label">
                      Hook Hand
                    </label>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      Add Pirate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PirateForm;
