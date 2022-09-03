import Spacer from "../components/Spacer";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "#002F24" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="/">
            Park Maintinance Application
          </a>
          <div class="navbar-nav me-3" style={{fontSize: "28px"}}>
            <a class="nav-link" href="#">
              Login
            </a>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "#002F24", width: "80%" }}
          >
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "#002F24" }}
            >
              <div className="container">
                <div className="row justify-content-end">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <a href="/" style={{ textDecoration: "none" }}>
                      <h5
                        className="offcanvas-title"
                        style={{ color: "whitesmoke" }}
                        id="offcanvasNavbarLabel"
                      >
                        Park Maintinance App
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="offcanvas-body lead"
              style={{ backgroundColor: "#002F24", fontFamily: "anak" }}
            >
              <ul
                className="navbar-nav justify-content-end text-center flex-grow-1"
                style={{ color: "whitesmoke" }}
              >
                <div className="container d-flex flex-column align-items-center">
                  <li className="btn btn-primary w-50 mb-5">Raise Ticket</li>
                  <li className="btn btn-light w-50">View tickets</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
