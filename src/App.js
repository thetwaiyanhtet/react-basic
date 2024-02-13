import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostDetail from "./components/PostDetail";

function App() {
  const DB_NAME = "PostDB";
  let [posts, setPosts] = useState([
    {
      id: "12345",
      title: "post one",
      content: "content one",
    },
    {
      id: "12345rwgs",
      title: "post two",
      content: "content two",
    },
    {
      id: "12345asfasgg",
      title: "post three",
      content: "content three",
    },
  ]);

  const addNewPost = (post) => {
    setPosts([...posts, post]);
  };

  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    return data ? setPosts(JSON.parse(data)) : [];
  }, []);

  const postDeleteHandler = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  // const updatePostHandler = (post) => {
  //   const updPostId = post.id;
  //   const result = posts.filter((post) => post.id != updPostId)
  //   console.log(result,updPostId);
  //    setPosts([...posts, post]);
  // };

  const updatePostHandler = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
console.log(updatedPosts);
    setPosts(updatedPosts);
  };

  return (
    <div className="container my-5">
      <div className=" text-info">
        <h1 className=" text-center">Posts</h1>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Post posts={posts} removePost={postDeleteHandler}></Post>
              }
            ></Route>
            <Route
              path="/add"
              element={<AddPost addPost={addNewPost}></AddPost>}
            ></Route>
            <Route path="/post/:id" element={<PostDetail></PostDetail>}></Route>
            <Route
              path="/post/edit/:id"
              element={<EditPost updatePost={updatePostHandler}></EditPost>}
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
