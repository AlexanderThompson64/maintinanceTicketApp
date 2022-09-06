import React from "react";
import { useForm } from "react-hook-form";

const NewTicketForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      contactNumber: "",
      parkName: "",
      issue: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="NewTicketForm container d-flex justify-content-center align-items-center"
      style={{ height: "60%" }}
    >
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center">
            <div className="mb-3">
              <label for="" className="form-label">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
                id="Name"
                aria-describedby="nameHelp"
              />
              {errors.name && (
                <p style={{ color: "red" }}>Name required</p>
              )}
            </div>
            <div className="mb-3">
              <label for="contactNumber" class="form-label">
                Contact Number
              </label>
              <input
                {...register("contactNumber", { required: true, minLength: 11, maxLength: 11 })}
                type="number"
                className="form-control"
                id="contactNumber"
              />
              {errors.contactNumber && <p style={{color: "red"}}>Please enter a valid UK mobile number</p>}
            </div>
            <div className="mb-3">
              <label for="contactNumber" class="form-label">
                Park Name
              </label>
              <input
                {...register("parkName", { required: true })}
                type="text"
                className="form-control"
                id="contactNumber"
              />
              {errors.parkName?.type === "required" && (
                <p style={{ color: "red" }}>Park Name required</p>
              )}
            </div>
            <br />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Issue
            </label>
            <textarea
              {...register("issue", { required: true })}
              className="form-control"
              style={{ height: "210px" }}
              id="issue"
              rows="3"
            ></textarea>
            {errors.issue?.type === "required" && (
              <p style={{ color: "red" }}>Field cannot be empty!</p>
            )}
          </div>
          <a
            className="btn btn-danger me-2"
            style={{ width: "150px" }}
            href="/"
          >
            Cancel
          </a>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "150px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTicketForm;
