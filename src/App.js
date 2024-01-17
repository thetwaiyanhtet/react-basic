import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  let [posts, setPosts] = useState([]);

  return (
    <div className="container my-5">
      <div className=" text-info">
        <h1 className=" text-center">Posts</h1>
        <Post posts={posts}></Post>
        <AddPost></AddPost>
      </div>
    </div>
  );
}

export default App;
