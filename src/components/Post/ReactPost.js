import { memo, useRef, useState, } from "react";
import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.scss";

function ReactPost({
  questionId,
  questionName,
  answer,
  postLiked,
  likePost,
  backgroundColour,
  cordinates,
  boardCord
}) {
  const [isMoving, setIsMoving] = useState(false);
  const [postCord, setPostCord] = useState(cordinates);
  const postRef = useRef();
  const likeButtonHandler = () => {
    console.log("Post liked");
    likePost(questionId);
  };

  const onMouseHoverHandler = (event) => {
    if(isMoving){
      console.log('post cord',  postCord)
      console.log('mouse cord', event.clientX, event.clientY)
      setPostCord({x:event.clientX-90, y:event.clientY-180})

    }
  }

  const onMousePressedPost = () => {
    setIsMoving(prev => !prev)
  }

  console.log("ReactPost", backgroundColour);

  return (
    <div ref={postRef} onMouseUp={onMousePressedPost} onMouseMove={onMouseHoverHandler} style={{left:postCord.x, top:postCord.y}} className={`${classes["post-container"]} ${classes[backgroundColour]}`}>
      <div className={classes["post-titleheader-content"]}>
        <h2>{questionName}</h2>
      </div>
      <div className={classes["post-main-content"]}>
        <p>{answer}</p>
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

export default memo(ReactPost);
