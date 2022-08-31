import PostLiked from "./PostLiked";
import classes from "./ReactPost.module.scss";

function ReactPost({
  questionId,
  questionName,
  answer,
  postLiked,
  likePost,
  backgroundColour
}) {
  const likeButtonHandler = () => {
    console.log("Post liked");
    likePost(questionId);
  };

  console.log("ReactPost", backgroundColour);

  return (
    <div className={`${classes["post-container"]} ${classes[backgroundColour]}`}>
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

export default ReactPost;
