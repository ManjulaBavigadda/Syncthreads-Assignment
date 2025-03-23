import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://syncthreads.herokuapp.com/register", user)
        .then((res) => {
          if (res.data.message === "Successfully Registerd") {
            toast("Successfully Registered", {
              type: "success",
            });
            setTimeout(() => {
              navigate("/login");
            }, 3000);

            // navigate("/login")
          } else {
            toast("Invalid  registration Credentials", {
              type: "error",
            });
          }
          console.log(res);
        });
    } else {
      toast("Invalid  registration Credentials", {
        type: "error",
      });
    }
  };

  return (
    <div className="register">
      <ToastContainer />
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>

      <div onClick={register} className="button-res">
        Register
      </div>

      <div className="or_name">OR</div>
      <Link to="/login" className="link">
        <div className="button-log">Login</div>
      </Link>
    </div>
  );
};

export default Register;
