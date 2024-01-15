import React from "react";

function User({ data, remove }) {
  const handleRemove = () => {
    remove(data.uuid);
  }
  return (
    <div className=" card my-3">
      <div className="row">
        <div className=" col-2 mx-auto">
          <img src={data.image} width="80px" ></img>
        </div>
        <div className=" col-5">
          <p>Ph: {data.phone}</p>
          <p>Cell: {data.cell}</p>
        </div>
        <div className=" col-2 mt-4">
                  <h5>{ data.name}</h5>
        </div>
        <div className=" col-2 mt-4">
          <button className=" btn btn-primary btn-sm" onClick={handleRemove}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default User;
