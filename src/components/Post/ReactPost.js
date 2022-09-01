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
  cordinates
}) {
  const [isMoving, setIsMoving] = useState(false);
  const [postCord, setPostCord] = useState(cordinates);
  const [cordOffset, setCordOffset] = useState({})
  const postRef = useRef();

  const likeButtonHandler = (event) => {
    event.stopPropagation();
    likePost(questionId);
  };

  const onMouseHoverHandler = (event) => {
    if(isMoving){
      setPostCord({x:event.clientX-cordOffset.xOffset, y:event.clientY-cordOffset.yOffset})

    }
  }

  const onMousePressedPost = (event) => {
    setIsMoving(prev => !prev);
    const xOffset = event.clientX - postCord.x;
    const yOffset = event.clientY - postCord.y;
    setCordOffset({xOffset, yOffset})
  }


  return (
    <div ref={postRef} onClick={onMousePressedPost} onMouseMove={onMouseHoverHandler} style={{left:postCord.x, top:postCord.y}} className={`${classes["post-container"]} ${classes[backgroundColour]} ${isMoving ? classes['post-moving'] : ''}`}>
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
