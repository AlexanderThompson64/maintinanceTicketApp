import React from "react";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  contactNumber: yup.number().required(),
  parkName: yup.string().required(),
  issue: yup.string().required(),
});

const NewTicketForm = () => {
  const [newParkName, setNewParkName] = useState("");
  const [newIssue, setNewIssue] = useState("");
  const [newName, setNewName] = useState("");
  const [newContactNumber, setNewContactNumber] = useState("");

  const ticketsCollectionRef = collection(db, "ticket-system");

  const createTicket = async () => {
    await addDoc(ticketsCollectionRef, {
      ticketID: Math.floor(Math.random() * 1000),
      name: newName,
      contactnumber: newContactNumber,
      parkname: newParkName,
      issue: newIssue,
      status: "In Progress",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div
      className="NewTicketForm container d-flex justify-content-center align-items-center"
      style={{ height: "60%" }}
    >
      <div className="container">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="row justify-content-center">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                aria-describedby="nameHelp"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                {...register("name")}
              />
              {errors.name && <p style={{color: "red"}}>Name is required</p>}
              
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                name="contactNumber"
                className="form-control"
                onChange={(event) => {
                  setNewContactNumber(event.target.value);
                }}
                {...register("contactNumber")}
              />
              {errors.contactNumber && <p style={{color: "red"}}>Please enter a valid mobile number</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Park Name
              </label>
              <input
                type="text"
                name="parkName"
                className="form-control"
                onChange={(event) => {
                  setNewParkName(event.target.value);
                }}
                {...register("parkName")}
              />
              {errors.contactNumber && <p style={{color: "red"}}>Please enter park name</p>}
            </div>
            <br />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Issue
            </label>
            <textarea
              className="form-control"
              name="issue"
              style={{ height: "210px" }}
              rows="3"
              onChange={(event) => {
                setNewIssue(event.target.value);
              }}
              {...register("issue")}
            ></textarea>
            {errors.contactNumber && <p style={{color: "red"}}>Field cannot be empty!</p>}
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
