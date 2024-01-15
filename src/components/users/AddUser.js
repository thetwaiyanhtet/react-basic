import React,{ useState} from "react";

function AddUser(props) {
    let [image, setImage] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [cell, setCell] = useState("");
    let [uuid, setUuid] = useState("");

    const imageChangeHandler = (e) => {
        setImage(e.target.value)
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }
    const cellChangeHandler = (e) => {
        setCell(e.target.value);
    }
    const uuidChangeHandler = (e) => {
        setUuid(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            image: image,
            name: name,
            phone: phone,
            cell: cell,
            uuid: uuid
        };
        props.addUser(user);
    }

  return (
    <div className=" card bg-dark">
      <form onSubmit={submitHandler}>
        <div className="mb-3 mx-3">
          <label htmlFor="image" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            aria-describedby="emailHelp"
            onChange={imageChangeHandler}
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="name" className="form-label text-white">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="phone" className="form-label text-white">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="cel" className="form-label text-white">
            Cell
          </label>
          <input
            type="tel"
            className="form-control"
            id="cel"
            onChange={cellChangeHandler}
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="uuid" className="form-label text-white">
            Uuid
          </label>
          <input
            type="text"
            className="form-control"
            id="uuid"
            aria-describedby="emailHelp"
            onChange={uuidChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3 float-end mx-3">
          Create
        </button>
      </form>
    </div>
  );
}
export default AddUser;
