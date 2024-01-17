import React, { Component, useState } from "react";

class PostCard extends Component {
  render() {
    return (
      <div className=" card my-3">
        <div className="row">
          <div className="col-2">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
              width={80}
            ></img>
          </div>
          <div className="col-5">
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.content}</p>
          </div>
          <div className="col-5">
            <button className="btn btn-sm btn-info mt-4">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
