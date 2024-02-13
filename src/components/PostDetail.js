import React, { Component } from "react";
import Img from "../imgs/profile.png";


class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1>Post Detail</h1>
        <div className="card">
          <img src={Img} alt="..." width={100} className=" mx-auto mt-3"></img>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PostDetail;
