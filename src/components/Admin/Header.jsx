import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import a from "../../assets/ImgImport";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyModal from './MyModal';

function Header(p) {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar d-flex navbar-expand ps-4 pe-4"
        style={{ backgroundColor: "#8000e2" }}
      >
        <Link className="navbar-brand me-5" to={"/"}><img src={a.AdminLogo} alt="" /></Link>
        <div className="w-100 d-flex justify-content-between align-content-lg-center">
          <form className="d-flex" id="form">
            <input
              className="search form-control rounded-pill"
              style={{ width: "70vw" }}
              type="search"
              placeholder="Search books"
              aria-label="Search"
            />
          </form>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>Add</Button>
        </div>
      </nav>




      <div style={{ height: "100vh" }}>
        <div className="user">
          <div className="admin">
            <h2 className="mt-4 text-dark">Admin</h2>
            <div className="logo">
              <i className="ri-logout-box-r-line"></i>
              <Button className='logout' variant='outline-danger' onClick={() => { navigate("/login") }
              }>Logout</Button>
            </div>
          </div>
          <div className="Overview">
            <div className="Overview_run">
              <h2>Overview</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <button className="Add"><img src="./img/Vector.png" alt="" />...</button> */}
              </div>
            </div>
            <div id="books_content">
              <div className="cost">
                <img src={a.python} alt="" className="" />
                <div>
                  <p>
                    The Big Book of Dashboards: Visualizing Your Data Using
                    Real-World Business Scenarios
                  </p>
                  <p>by Steve Wexler , Jeffrey Shaffer, et al. | Apr 24, 2017</p>
                  <img src="./img/i.png" alt="i" />
                  <p>Cost: $24.49</p>
                  <div className="button">
                    <button className="Edit">Edit</button>
                    <button className="Delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="showScroll"></div>
          </div>
        </div>
        <div className="">
          <div className="backdrop">
            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="moon">
          <button className="btn_one"><i className="ri-arrow-left-line"></i></button>
          <button className="btn">1</button>
          <button className="btn_two">2</button>
          <button className="btn_three">3</button>
          <button className="btn_five"><i className="ri-arrow-right-line"></i></button>
        </div>.
      </div>
    </>
  )
}

export default Header