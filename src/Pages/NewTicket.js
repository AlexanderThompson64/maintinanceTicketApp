import NewTicketForm from "../components/NewTicketForm";

const NewTicket = () => {
  return (
    <div className="NewTicket container-fluid d-flex justify-content-center align-items-center text-light" style={{height: "100vh", width: "100vw"}}>
      <NewTicketForm/>
    </div>
  );
};

export default NewTicket;
