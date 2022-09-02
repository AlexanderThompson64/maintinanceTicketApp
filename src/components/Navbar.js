const Navbar = () => {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "#0b192e" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand ms-4"
            style={{ fontFamily: "Dancing" }}
            href="/"
          >
            A.Thompson
          </a>
          <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "#0B192E", width: "80%" }}
          >
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "#0b192e" }}
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
                        style={{ color: "whitesmoke", fontFamily: "Dancing" }}
                        id="offcanvasNavbarLabel"
                      >
                        A.Thompson
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="offcanvas-body lead"
              style={{ backgroundColor: "#0b192e", fontFamily: "anak" }}
            >
              <ul className="navbar-nav justify-content-end text-center flex-grow-1"></ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
