import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  delete() {
    this.props.remove(this.props.post.id);
  }
  render() {
    const post = this.props.post;
    return (
      <div className=" card my-3">
        <div className="row">
          <div className="col-3 mx-4">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
              width="80px"
            ></img>
          </div>
          <div className="col-4 text-center">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
          <div className="col-2">
            <div className="d-flex">
              <Link to={`/post/${post.id}`} state={{ post: post }}>
                <div className="mx-2">
                  <button className="btn btn-sm btn-info mt-4">view</button>
                </div>
              </Link>
              <Link to={`/post/edit/${post.id}`} state={{ post: post }}>
                <div className="mx-2">
                  <button className="btn btn-sm btn-info mt-4">edit</button>
                </div>
              </Link>
              <div className=" mx-2">
                <button
                  className="btn btn-sm btn-info mt-4"
                  onClick={this.delete.bind(this)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
