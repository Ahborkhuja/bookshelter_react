import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import a from "../../assets/ImgImport";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyModal from './MyModal';
function Header(p) {
  
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
          <Button variant="outline-success" onClick={() => p.setModalShow(true)}>Add</Button>
        </div>
      </nav>
    </>
  )
}

export default Header