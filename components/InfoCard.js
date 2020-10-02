import React from "react";

export default function InfoCard(props) {
  const { title, description, img } = props.content;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="" className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}
