import React, { Component } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    const post = this.props.state.state.post;
    this.state = {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  }

  updPost = (e) => {
    e.preventDefault();
    // const newPost = { id: uuid(), ...this.state };
    // this.props.addPost(newPost);
    // this.setState({ title: "", content: "" });
    // this.props.navigate("/");
      this.props.updatePost(this.state);
      this.props.navigate('/');
  };

  render() {
    return (
      <div>
        <Link to={"/"}>
          <button className="btn btn-primary btn-sm mb-3">Back</button>
        </Link>
        <div className="card bg-dark text-white p-5">
          <h2>Edit Post</h2>
          <form onSubmit={this.updPost}>
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
              <button
                type="submit"
                className="btn btn-primary btn-sm float-end"
              >
                Update
              </button>
          </form>
        </div>
      </div>
    );
  }
}
// export default EditPost;
export default (props) => {
  let navigate = useNavigate();
  let state = useLocation();
  return <EditPost {...props} state={state} navigate={navigate}></EditPost>;
};
