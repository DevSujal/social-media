import { createContext, useReducer } from "react";

const default_context = {
  postList: [],
  createPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(default_context);

const postListReducer = (currPostList, action) => {

  if(action.type === "DILETE_POST"){
    currPostList = currPostList.filter((value) => value.sr !== action.payload.sr)
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_value
  );

  const addPost = () => {};
  const deletePost = (key) => {
    dispatchPostList({
      type : "DILETE_POST",
      payload : {
        sr : key
      }
    })
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};



const default_value = [
  {
    sr: 1,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 2,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 3,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 4,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 5,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 6,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 7,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 8,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 9,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 10,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 11,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 12,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 13,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 14,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },
  {
    sr: 15,
    title: "Kya bhai kaisa",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi harum, quas vero explicabo impedit delectus iusto eius dolor vitae totam! Laudantium, quaerat. Ut dolorem quasi dolorum cumque beatae hic quidem!",
    reaction: 2,
    date : "12-09-23",
    img : "https://picsum.photos/200/300?random=1",
    userid: "user - 90",
    tags: ["vacation", "mumbai", "enjoy"],
    imgTitle : "samosa",
  },


];

export default PostListProvider;
