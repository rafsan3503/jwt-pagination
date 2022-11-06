import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    const currentUser = {
      email,
      password,
    };
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleUpdate}>
      <h2>lets update this user: {user.email}</h2>
      <p>Email</p>
      <br />
      <input type="text" name="email" defaultValue={user.email} /> <br />
      <p>password</p> <br />
      <input type="text" name="password" defaultValue={user.password} /> <br />
      <button type="submit" className="bg-blue-400">
        Update
      </button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default Update;
