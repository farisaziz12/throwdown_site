import React, { useState } from "react";
import PopPop from "react-poppop";

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
        <h1>{title}</h1>
        <h5>
          If these requirements align with your abilites then this is the
          category for you:
        </h5>
        <ul>
          {requirements.map((requirement) => (
            <strong>
              <li>{requirement}</li>
            </strong>
          ))}
        </ul>
      </PopPop>
    </div>
  );
}
