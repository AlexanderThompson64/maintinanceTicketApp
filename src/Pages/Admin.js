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
    alert("Ticket Deleted");
    refreshPage();
  };

  //Allows us to update the status of a ticket to complete by populatiing a button with each ticket.
  const completeTicket = async (id, status) => {
    const ticketDoc = doc(db, "ticket-system", id);
    const newFields = { status: status = "Complete" };
    await updateDoc(ticketDoc, newFields);
    alert("Ticket marked as complete");
    refreshPage();
  };

  const allocateTicket = async (id, status) => {
    const ticketDoc = doc(db, "ticket-system", id);
    const newFields = { status: status = "Allocated" };
    await updateDoc(ticketDoc, newFields);
    alert("Ticket marked as allocated");
    refreshPage();
  };

  return (
    <div className="Admin" style={{ marginTop: "100px", fontFamily: "anak" }}>
      <div className="container-fluid ">
      <h1 className="text-white text-center">All Tickets  </h1>
      <p className="text-white text-center">Please ensure all tickets are updated within the 48 hour SLA</p>
      </div>
      
      {ticket.map((ticket) => {
        return (
          <div>
            {" "}
            <div className="ticketRow row justify-content-center align-items-center p-2">
              <div
                className="ticketDetails card card-body border border-dark rounded p-4 m-4 w-25 text-center"

              >
                
                <p>Name: {ticket.name}</p>
                <p>Contact Number: {ticket.contactnumber}</p>
                <p>Park name: {ticket.parkname}</p>
                <p>Issue: {ticket.issue}</p>
                <p>Status: {ticket.status}</p>

                <div className="btnGroup">
                  <button
                    class="btn btn-danger me-2"
                    onClick={() => {
                      deleteTicket(ticket.id);
                    }}
                  >
                    Delete Ticket
                  </button>
                  <button
                    class="btn btn-warning me-2"
                    onClick={() => {
                      allocateTicket(ticket.id, ticket.status);
                    }}
                  >
                    Allocate Ticket
                  </button>
                  <br />
                  <br />
                  <button
                    class="btn btn-primary me-2"
                    onClick={() => {
                      completeTicket(ticket.id, ticket.status);
                    }}
                  >
                    Complete ticket
                  </button>
                 
                 

                </div>
              </div>
              <div className="col-8 d-flex justify-content-center text-white ">
              <h1>Ticket ID: {ticket.ticketID}</h1>
              </div>
                
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Admin;
