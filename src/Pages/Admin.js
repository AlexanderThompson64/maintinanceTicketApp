import { useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const Admin = () => {
  const [ticket, setTickets] = useState([]);
  const ticketsCollectionRef = collection(db, "ticket-system");

  //use effect function required to access database.
  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketsCollectionRef);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTickets();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  //function to delete tickets by selected id which we will target by populating a button with each ticket.
  const deleteTicket = async (id) => {
    const ticketDoc = doc(db, "ticket-system", id);
    await deleteDoc(ticketDoc);
  };

  //Allows us to update the status of a ticket to complete by populatiing a button with each ticket.
  const updateTicket = async (id, ticketID) => {
    const ticketDoc = doc(db, "ticket-system", id, ticketID);
    const newFields = { status: "Complete" };
    await updateDoc(ticketDoc, newFields);
  };

  return (
    <div className="Admin text-light" style={{ marginTop: "100px" }}>
      <h1>Hello there</h1>
      {ticket.map((ticket) => {
        return (
          <div>
            {" "}
            <div
              class="border border-dark rounded p-4 m-4"
              className="ticketDetails"
            >
              <p>Ticket ID: {ticket.ticketID}</p>
              <p>Name: {ticket.name}</p>
              <p>Contact Number: {ticket.contactnumber}</p>
              <p>Park name: {ticket.parkname}</p>
              <p>Issue: {ticket.issue}</p>
              <p>Status: {ticket.status}</p>
            </div>
            <div className="btnGroup">
              <button
                class="btn btn-danger me-2"
                onClick={() => {
                  deleteTicket(ticket.ticketID);
                  refreshPage();
                }}
              >
                Delete Ticket
              </button>

              <button
                class="btn btn-primary me-2"
                onClick={() => {
                  updateTicket(ticket.id, ticket.ticketID);
                  refreshPage();
                }}
              >
                Complete ticket
              </button>
              <br />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
