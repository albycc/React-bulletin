import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.scss";

function ReactPost({
  questionId,
  questionName,
  answers,
  postLiked,
  usersAnswer,
  setPostAttribute,
  correctAnswerIndex,
}) {
  const likeButtonHandler = () => {
    console.log("Post liked");
    setPostAttribute({ id: questionId, attribute: "postLiked", value: true });
  };

  const answersButtonHandler = (event) => {
    const indexValue = event.target.dataset.answerIndex;
    setPostAttribute({
      id: questionId,
      attribute: "usersAnswer",
      value: indexValue,
    });
  };

  console.log("ReactPost", questionId);

  const userHasAnswered = usersAnswer === "" ? false : true;
  const answerClassStyle = usersAnswer === correctAnswerIndex ? 'right-answer' : 'wrong-answer';

  console.log('answerClassStyle', answerClassStyle)

  return (
    <div className={classes["post-container"]}>
      <div className={classes["post-titleheader-content"]}>
        <h2>{questionName}</h2>
      </div>
      <div className={classes["post-main-content"]}>
        <ul className={classes["question-button-list"]}>
          {answers.map((answer, index) => (
            <li
              key={questionId + index}
              className={classes["question-listitem"]}
            >
              {!userHasAnswered ?
                <button
                  data-answer-index={index}
                  onClick={answersButtonHandler}
                  className={`${classes['answer-style']} ${classes["question-button"]}`}
                  disabled={userHasAnswered}
                >
                  {answer}
                </button> :
                <p className={`${classes['answer-style']} ${classes['answered-paragraph']} ${ index === +usersAnswer && `${classes[answerClassStyle]}`} `}>{answer}</p>
              }
            </li>
          ))}
        </ul>
      </div>
      <div className={classes["post-footer-content"]}>
        {postLiked ? (
          <PostLiked />
        ) : (
          <button
            className={classes["like-button"]}
            onClick={likeButtonHandler}
          ></button>
        )}
      </div>
    </div>
  );
}

export default ReactPost;
