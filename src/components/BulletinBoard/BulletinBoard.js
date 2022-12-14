import { useEffect, useState } from "react";
import QuestionData from "../../data/QuestionData.json";
import ReactPost from "../Post/ReactPost";

import classes from "./BulletinBoard.module.scss";


function Bulletinboard() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const dataList = JSON.parse(JSON.stringify(QuestionData)).questions;
    setQuestionList(dataList);
  }, []);

  const setPostToLiked = ( id) => {
    const copiedList = [...questionList];
    copiedList.find(({ questionId }) => questionId === id).postLiked = true;
    setQuestionList(copiedList);
  };

  const setPostToTopIndex = (id) => {
    const postList = questionList.filter(post => post.questionId !== id);
    postList.push(questionList.find(post => post.questionId === id));
    setQuestionList(postList)
  }

  return (
      <div className={classes["bulletinboard-container"]}>
        {questionList.map((question) => (
          <ReactPost
            key={question.questionId}
            {...question}
            likePost={setPostToLiked}
            changeZindex={setPostToTopIndex}
          />
        ))}
        <img className={classes['billboard-imagetext']} src={require("../../img/text-background.png")} alt="" />
      </div>
  );
}

export default Bulletinboard;
