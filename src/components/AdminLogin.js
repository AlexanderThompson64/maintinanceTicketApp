const AdminLogin = () => {
  return (
    <div className="AdminLogin">
      <div
        className="row justify-content-center align-items-center text-light"
        style={{ height: "400px" }}
      >
        <div className="col-lg-5 text-center mt-5 text-lg-start">
          <h1 className="display-3">Admin? <br /> Log in here!</h1>
          <p className="lead">
            For maintinance access login here! <br /> 
            Cant log in? Contact IT support <a href="">here</a>
          </p>
        </div>
        <div className="col-lg-3">
          <div
            className="projectCard container-fluid d-flex flex-column justify-content-center rounded text-center text-dark"
            id="projectCardAdmin"
            style={{
              width: "90%",
              height: "300px",
              backgroundColor: "whitesmoke",
              color: "whitesmoke",
              boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <h1 className="projectTitles" style={{ fontSize: "22px" }}>
              Admin Login Portal
            </h1>

            <p className="projectsP">
              Please log in to view and maintain ticket requests.
            </p>
            <div className="container d-flex justify-content-center">
              <a
                href="/projects/0"
                className="projectsBtn btn btn-warning text-dark"
                style={{ color: "white", width: "50%" }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
