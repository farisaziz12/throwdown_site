import React, { useState } from "react";
import PopPop from "react-poppop";
import styles from "../styles/Home.module.css";

export default function InfoCard(props) {
  const { title, description, more_info, requirements, img } = props.content;
  const [showModal, setShowModal] = useState(false);

  const toggleShow = (show) => {
    setShowModal(show);
  };

  return (
    <div className="center-item card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button onClick={() => toggleShow(true)} className="btn btn-primary">
          Learn more
        </button>
      </div>
      <PopPop
        position="centerCenter"
        open={showModal}
        closeBtn={true}
        closeOnEsc={true}
        onClose={() => toggleShow(false)}
        closeOnOverlay={true}
      >
        <div className="more-info-modal">
          <h1 className={styles.fontandcenter}>{title}</h1>
          <h5>Standards:</h5>
          <small id="standardsHelp" className="form-text text-muted">
            At least 2 team members should fit this criteria
          </small>
          <ul className="list-group">
            {requirements.map((requirement) => (
              <li key={requirement} className="list-group-item">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </PopPop>
    </div>
  );
}
