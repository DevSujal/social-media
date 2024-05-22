import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../Store/PostListStore";

const PostList = () => {
  const { postList, createPost, deletePost } = useContext(PostListContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      {postList.map((value) => {
        return (
          <Post
            key={value.sr}
            title={value.title}
            body={value.body}
            add={createPost}
            date = {value.date}
            delete={deletePost}
            reaction={value.reaction}
            sr={value.sr}
            tags = {value.tags}
            img = {value.img + value.sr}
            imgTitle = {value.imgTitle}
          />
        );
      })}
    </div>
  );
};

export default PostList;
