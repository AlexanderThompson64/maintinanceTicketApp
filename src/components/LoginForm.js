import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="LoginForm container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "60%" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.email?.type === "required" && (
            <p style={{ color: "red" }}>Email address required</p>
          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {errors.password?.type === "required" && (
            <p style={{ color: "red" }}>Password field cannot be empty!</p>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
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
      </form>
    </div>
  );
};

export default LoginForm;
