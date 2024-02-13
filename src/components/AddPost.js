import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

class AddPost extends Component {
  state = {
    title: "",
    content: "",
  };

  addUser = (e) => {
    e.preventDefault();
    const newPost = { id: uuid(), ...this.state };
    this.props.addPost(newPost);
    this.setState({ title: "", content: "" });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="card bg-dark text-white p-5">
        <h2>Add New Post</h2>
        <form onSubmit={this.addUser}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Post Content
            </label>
            <input
              type="text"
              className="form-control"
              id="content"
              onChange={(e) => this.setState({ content: e.target.value })}
              value={this.state.content}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary btn-sm float-end">
            Add
          </button>
        </form>
      </div>
    );
  }
}

// export default AddPost;

export default (props) => {
  const navigator = useNavigate();
  return <AddPost {...props} navigate={navigator}></AddPost>;
};
