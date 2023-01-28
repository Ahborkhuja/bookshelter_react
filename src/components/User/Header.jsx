import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./User.css";
import a from "../../assets/ImgImport";
function Header() {
  let isLogged = true;
  let navigate = useNavigate();
  const clicked = (e) => {
    if (!isLogged) {
      navigate("/login")
    } else {
      navigate("/admin");
    }
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <nav
            className="navbar d-flex navbar-expand-lg navbar-light border-bottom bg-white ps-4 pe-4"
          >
            {console.log(a.Lupa)}
            <Link className="navbar-brand me-5" to={"/"}><img src={a.Logo} alt="" /></Link>
            <div className="w-100 d-flex justify-content-between align-content-lg-center">
              <form className="d-flex" id="form">

                <input
                  className="search form-control rounded-pill bg-transparent"
                  style={{ width: "35vw" }}
                  type="search"
                  placeholder="Search books"
                  aria-label="Search"
                />
              </form>
              <Button onClick={clicked} variant="outline-primary">Admin</Button>
            </div>
          </nav>
          <nav className="navbar d-flex navbar-expand-lg navbar-light border-bottom bg-white">
            <div style={{ width: "22vw" }}></div>
            <div className="container d-flex align-content-center">
              <p className="NumOfRes">Showing x Result(s)</p>
              <Button
                type="button"
                variant="outline-secondary"
                className="d-flex align-content-center gap-2 butn"
              >
                Order by newest
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header