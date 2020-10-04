import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import { Form, Checkbox } from "semantic-ui-react";
import styles from "../styles/Home.module.css";
import { quiz } from "../content/quiz";

export default function Quiz(props) {
  const { close } = props;
  const [value, setValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(undefined);
  const [results, setResults] = useState({});

  const handleChange = (e, { value }) => {
    setValue(value);
    const quizResults = JSON.parse(localStorage.getItem("quizResults"));
    quizResults[currentIndex] = value;
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
  };

  const handleCalculateResult = () => {
    const results = [];
    const quizResults = JSON.parse(localStorage.getItem("quizResults"));
    const groupedCategories = _.groupBy(quizResults, "category");
    const keys = Object.keys(groupedCategories);
    keys.forEach((key) => {
      const points = groupedCategories[key].reduce(
        (acc, obj) => acc + obj.points,
        0
      );
      results.push({ [key]: points });
    });

    const chosenCategory = _.maxBy(
      results,
      (o) => o.spicy || o.ludicrous || o.fun
    );
    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {
      setResults(results);
    } else {
      setChosenCategory(Object.keys(chosenCategory)[0]);
      setResults(results);
    }
  };

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify([]));
  }, []);

  const handleNext = () => {
    const next = quiz[currentIndex + 1];
    if (next) {
      setValue("");
      setCurrentIndex(currentIndex + 1);
    } else {
      setDone(true);
      handleCalculateResult();
    }
  };

  const current = quiz[currentIndex];
  const percentDone = Math.round(((currentIndex + 1) / quiz.length) * 100);
  return (
    <div className="more-info-modal">
      <h1 className={styles.fontandcenter}>Quiz</h1>
      {!done && (
        <div className="progress topspace">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentDone}%` }}
            aria-valuenow={percentDone}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentDone}%
          </div>
        </div>
      )}
      <Form className="topspace">
        {!done ? (
          <>
            <Form.Field>
              <strong>{current.question}</strong>
            </Form.Field>
            {current.answers.map((answer) => (
              <Form.Field>
                <Checkbox
                  key={answer.value}
                  radio
                  label={answer.txt}
                  name="checkboxRadioGroup"
                  value={answer.value}
                  checked={value === answer.value}
                  onChange={handleChange}
                />
              </Form.Field>
            ))}
          </>
        ) : (
          results && (
            <div>
              <h1 className={styles.fontandcenter}>Results</h1>
              <h2>
                <strong>Ideal category: </strong>
                {chosenCategory
                  ? chosenCategory.replace(/^\w/, (c) => c.toUpperCase())
                  : "Indecisive"}
              </h2>
              <div className="topspace">
                <ul>
                  {results[0] && (
                    <>
                      <h3>
                        <strong>
                          {Object.keys(results[0])[0].replace(/^\w/, (c) =>
                            c.toUpperCase()
                          )}
                          :
                        </strong>
                      </h3>
                      <div className="progress topspace">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${
                              (Object.values(results[0])[0] / quiz.length) * 100
                            }%`,
                          }}
                          aria-valuenow={
                            (Object.values(results[0])[0] / quiz.length) * 100
                          }
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {(Object.values(results[0])[0] / quiz.length) * 100 >
                          100
                            ? 100
                            : Math.round(
                                (Object.values(results[0])[0] / quiz.length) *
                                  100
                              )}
                          %
                        </div>
                      </div>
                    </>
                  )}
                  {results[1] && (
                    <>
                      <h3>
                        <strong>
                          {Object.keys(results[1])[0].replace(/^\w/, (c) =>
                            c.toUpperCase()
                          )}
                          :
                        </strong>
                      </h3>
                      <div className="progress topspace">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${
                              (Object.values(results[1])[0] / quiz.length) * 100
                            }%`,
                          }}
                          aria-valuenow={
                            (Object.values(results[1])[0] / quiz.length) * 100
                          }
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {(Object.values(results[1])[0] / quiz.length) * 100 >
                          100
                            ? 100
                            : Math.round(
                                (Object.values(results[1])[0] / quiz.length) *
                                  100
                              )}
                          %
                        </div>
                      </div>
                    </>
                  )}
                  {results[2] && (
                    <>
                      <h3>
                        <strong>
                          {Object.keys(results[2])[0].replace(/^\w/, (c) =>
                            c.toUpperCase()
                          )}
                          :
                        </strong>
                      </h3>
                      <div className="progress topspace">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${
                              (Object.values(results[2])[0] / quiz.length) * 100
                            }%`,
                          }}
                          aria-valuenow={
                            (Object.values(results[2])[0] / quiz.length) * 100
                          }
                          aria-valuemin=""
                          aria-valuemax="100"
                        >
                          {(Object.values(results[2])[0] / quiz.length) * 100 >
                          100
                            ? 100
                            : Math.round(
                                (Object.values(results[2])[0] / quiz.length) *
                                  100
                              )}
                          %
                        </div>
                      </div>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )
        )}
        {!done ? (
          <Form.Field>
            <button
              disabled={!value}
              onClick={handleNext}
              type="button"
              className="btn btn-success center-item topspace"
            >
              Next
            </button>
          </Form.Field>
        ) : (
          <Form.Field>
            <button
              onClick={close}
              type="button"
              className="btn btn-primary center-item topspace"
            >
              Done
            </button>
          </Form.Field>
        )}
      </Form>
    </div>
  );
}
