const NewTicketForm = () => {
  return (
    <div
      className="NewTicketForm container d-flex justify-content-center align-items-center"
      style={{ height: "60%" }}
    >
      <div className="container">
        <form>
          <div className="row justify-content-center">
            <div className="mb-3">
              <label for="" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label for="contactNumber" class="form-label">
                Contact Number
              </label>
              <input type="text" className="form-control" id="contactNumber" />
            </div>
            <div className="mb-3">
              <label for="contactNumber" class="form-label">
                Park Name
              </label>
              <input type="text" className="form-control" id="contactNumber" />
            </div>
            <br />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Issue
            </label>
            <textarea
              className="form-control"
              style={{ height: "210px" }}
              id="issue"
              rows="3"
            ></textarea>
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
