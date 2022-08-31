import { Fragment, useEffect, useState } from "react";
import QuestionData from "../../data/QuestionData.json";
import ReactPost from "../Post/ReactPost";

import classes from "./BulletinBoard.module.scss";


function Bulletinboard() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const dataList = JSON.parse(JSON.stringify(QuestionData)).questions;
    console.log(dataList);
    setQuestionList(dataList);
  }, []);

  useEffect(() => {
    console.log("Updated questionList", questionList);
  }, [questionList]);

  const editPostAttribute = ({ id, attribute, value }) => {
    const copiedList = [...questionList];
    copiedList.find(({ questionId }) => questionId === id)[`${attribute}`] =
      value;
    setQuestionList(copiedList);
  };
  return (
    <Fragment>
      <h1 className="">React Quiz Bulletin</h1>
      <div className={classes["bulletinboard-container"]}>
        {questionList.map((question) => (
          <ReactPost
            key={question.questionId}
            {...question}
            setPostAttribute={editPostAttribute}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Bulletinboard;
