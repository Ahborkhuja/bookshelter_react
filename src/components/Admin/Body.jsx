import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import a from "../../assets/ImgImport";
import MyModal from './MyModal';
import './admin.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import AdminGet from './AdminGet';
function Body(p) {
  const navigate = useNavigate();
  console.log();
  return (
    <>
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
            <div className='books_content'>
              <AdminGet />
            </div>
            <div id="showScroll"></div>
          </div>
        </div>
        <div className="">
          <div className="backdrop">
            <MyModal
              show={p.modalShow}
              onHide={() => p.modalShow} />
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

export default Body