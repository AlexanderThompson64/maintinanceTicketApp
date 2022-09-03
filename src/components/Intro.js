import parkImg from "../img/parkImg.png";

const Intro = () => {
  return (
    <div className="Intro text-white" style={{ fontFamily: "anak" }}>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "700px" }}
      >
        <div className="col-lg-5 text-center text-xl-start">
          <h1 className="display-3">Welcome to your local park</h1>
          <p className="lead">
            Have an issue that needs reported? <br /> Our Team are always on
            hand!
          </p>
        </div>
        <div className="col-lg-3 ">
          <div
            className="projectCard container-fluid d-flex flex-column justify-content-center rounded text-center text-dark"
            id="projectCard"
            style={{
              width: "90%",
              height: "300px",
              backgroundColor: "whitesmoke",
              color: "whitesmoke",
              boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <h1 className="projectTitles" style={{ fontSize: "22px" }}>
              Issue at your local park?
            </h1>

            <p className="projectsP">
              Report this via our ticket system system so our team can take
              action
            </p>

            <p className="projectsP">
              Report it, get it sorted!
              <br />
              <span>Park Maintiance / Vandalism / Feedback</span>
            </p>
            <div className="container d-flex justify-content-center">
              <a
                href="/projects/0"
                className="projectsBtn btn btn-warning"
                style={{width: "50%" }}
              >
                Create Ticket
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Intro;
