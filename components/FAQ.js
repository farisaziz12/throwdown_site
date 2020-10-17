import React, { useState } from "react";
import PopPop from "react-poppop";
import Quiz from "./Quiz";

export default function FAQ(props) {
  const [showModal, setShowModal] = useState(false);

  const { FAQs } = props;

  const toggleShow = (show) => {
    setShowModal(show);
  };

  return (
    <div>
      <div className="accordion width-limit center-item" id="accordionExample">
        {FAQs.map((FAQ) => (
          <div key={FAQ.question} className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {FAQ.question}
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {FAQ.answer}
                {FAQ.button === "quiz" && (
                  <div>
                    <button
                      onClick={() => toggleShow(true)}
                      className="btn btn-success"
                    >
                      Quiz
                    </button>
                    <PopPop
                      position="centerCenter"
                      open={showModal}
                      closeBtn={true}
                      closeOnEsc={true}
                      onClose={() => toggleShow(false)}
                      closeOnOverlay={true}
                    >
                      <Quiz close={() => toggleShow(false)} />
                    </PopPop>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
