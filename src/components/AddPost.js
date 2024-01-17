import React, { Component } from "react";

class AddPost extends Component {
  render() {
    return (
        <div className="card bg-dark text-white p-5">
            <h2>Add New Post</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input type="text" className="form-control" id="title"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Post Title
            </label>
            <input type="text" className="form-control" id="content"></input>
          </div>
          <button type="submit" className="btn btn-primary btn-sm float-end">Add</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
