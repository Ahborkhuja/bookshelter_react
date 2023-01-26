import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import { Button, FormControl, FormLabel, FormSelect, Modal } from "react-bootstrap";

import logo from "../../assets/adminLogo.svg"
import cancel from "../../assets/cancel.svg"

import { Form } from 'react-router-dom';
function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
        <div className="user">
          <div className="admin">
            <img src={logo} alt="logo" />
            <h2 className="mt-4">Admin</h2>
            <div className="logo">
              <i className="ri-logout-box-r-line"></i>
              <p>Logout</p>
            </div>
          </div>
          <div className="Overview">
            <div className="Overview_run">
              <h2>Overview</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <button className="Add"><img src="./img/Vector.png" alt="" />...</button> */}
                <button className="Add_add" variant="primary" onClick={() => setModalShow(true)}>Add</button>
              </div>
            </div>
            <div id="books_content">
              <div className="cost">
                <img src="./img/garri.webp" alt="" className="garri" />
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
        </div>
    </>
  )
}
function MyModal(props) {
  const submitHandler = ()=>{

  }
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header style={{display:"flex",justifyContent:"end"}}>
        <Button className='clear' onClick={props.onHide} id="cancelbtn"><img src={cancel} alt="" /></Button>
      </Modal.Header>
      <Modal.Body >
        <div className='custom-modal'>
          <Form action="" id="form" onSubmit={submitHandler} className='form'>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Book Title</FormLabel>
              <FormControl type="text" id="book_title" />
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Author</FormLabel>
              <FormControl type="text" id="author" />
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Category</FormLabel>
              <FormSelect value="all" id="category">
                <option value="comedy">Comedy</option>
              </FormSelect>
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Price</FormLabel>
              <FormControl type="number" id="price" />
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Published Data</FormLabel>
              <FormControl type="date" id="date" />
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Publisher Name</FormLabel>
              <FormControl type="text" id="publisherName" />
            </div>
            <div className='dflex'>
            <FormLabel style={{width:"200px",textAlign:"center"}}>Rate</FormLabel>
              <FormControl type="number" id="rate" />
            </div>
            <div className="d-none spinner-border" id="loading"></div>
            <Button className='btn btn-outline-primary' type="submit" >Kitob qoshish</Button>
          </Form>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default Header