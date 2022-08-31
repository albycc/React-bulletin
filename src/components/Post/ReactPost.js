import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.scss";

function ReactPost({
  questionId,
  questionName,
  answers,
  postLiked,
  usersAnswer,
  setPostAttribute,
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

  return (
    <div className={classes["post-container"]}>
      <div className={classes['post-titleheader-content']}>
        <h2>{questionName}</h2>
      </div>
      <div className={classes['post-main-content']}>
        <ul>
          {answers.map((answer, index) => (
            <li key={questionId + index}>
              <button
                data-answer-index={index}
                onClick={answersButtonHandler}
                disabled={userHasAnswered}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes['post-footer-content']}>
        {postLiked ? (
          <PostLiked />
        ) : (
          <button className={classes['like-button']} onClick={likeButtonHandler}>Like</button>
        )}
      </div>
    </div>
  );
}

export default ReactPost;
