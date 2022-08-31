import { useState } from "react";
import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.css";

function ReactPost({ questionId, questionName, answers, correctAnswerIndex, index, postLiked, setPostToLiked }) {
  const [id, setId] = useState(questionId);
  const [postIndex, setPostIndex] = useState(index);

  const likeButtonHandler = () => {
    console.log('Post liked');
    setPostToLiked(id, postIndex)

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
