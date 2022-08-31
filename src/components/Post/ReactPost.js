import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.css";

function ReactPost({ questionId, questionName, answers, correctAnswerIndex, postLiked, setPostToLiked }) {

  const likeButtonHandler = () => {
    console.log('Post liked');
    setPostToLiked(questionId)
  }

  console.log('ReactPost', questionId)

  return (
    <div className={classes["post-container"]}>
      <div>
        <h2>{questionName}</h2>
      </div>
      <div>
        <ul>
          {answers.map((answer, index) => (
            <li key={questionId + index}>
              <button>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {postLiked ? <PostLiked /> : <button onClick={likeButtonHandler}>Like</button>}
      </div>
    </div>
  );
}

export default ReactPost;
