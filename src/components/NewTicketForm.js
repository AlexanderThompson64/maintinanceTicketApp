import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const NewTicketForm = () => {
  const [newParkName, setNewParkName] = useState("");
  const [newIssue, setNewIssue] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newName, setNewName] = useState("");
  const [newContactNumber, setNewContactNumber] = useState("");

  const ticketsCollectionRef = collection(db, "ticket-system");

  const createTicket = async () => {
    await addDoc(ticketsCollectionRef, {
      ticketID: Math.floor(Math.random() * 1000),
      parkname: newParkName,
      issue: newIssue,
      status: newStatus,
      name: newName,
      contactnumber: newContactNumber,
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
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
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              {errors.name && <p style={{ color: "red" }}>Name required</p>}
            </div>
            <div className="mb-3">
              <label for="contactNumber" class="form-label">
                Contact Number
              </label>
              <input
                {...register("contactNumber", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
                type="number"
                className="form-control"
                id="contactNumber"
                onChange={(event) => {
                  setNewContactNumber(event.target.value);
                }}
              />
              {errors.contactNumber && (
                <p style={{ color: "red" }}>
                  Please enter a valid UK mobile number
                </p>
              )}
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
                onChange={(event) => {
                  setNewParkName(event.target.value);
                }}
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
              onChange={(event) => {
                setNewIssue(event.target.value);
                setNewStatus("In progress");
              }}
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
            onClick={createTicket}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTicketForm;
