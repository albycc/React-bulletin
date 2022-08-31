import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.css";

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
      <div>
        <h2>{questionName}</h2>
      </div>
      <div>
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
      <div>
        {postLiked ? (
          <PostLiked />
        ) : (
          <button onClick={likeButtonHandler}>Like</button>
        )}
      </div>
    </div>
  );
}

export default ReactPost;
