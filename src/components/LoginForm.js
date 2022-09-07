import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = () => {
    navigate("/");
  };

  return (
    <div
      className="LoginForm container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "60%" }}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email")}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
          {errors.email && (
            <p style={{ color: "red" }}>Password or email is incorrect</p>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "200px" }}
        >
          Submit
        </button>
        <br />
        <br />
        <p>
          Cant log in? contact IT support <a href="/">here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
