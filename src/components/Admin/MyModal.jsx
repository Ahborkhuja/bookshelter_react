import React from 'react'
import { Button, FormControl, FormLabel, FormSelect, Modal } from "react-bootstrap";
import cancel from "../../assets/cancel.svg"
import { Form } from 'react-router-dom';
function MyModal(props) {
  const submitHandler = (e)=>{
    e.preventDefault();
    const bookObj={
      book_title:e.target.book_title.valueOf().value,
      author:e.target.author.valueOf().value,
      category:e.target.category.valueOf().value,
      price:e.target.price.valueOf().value,
      date:e.target.date.valueOf().value,
      date:e.target.date.valueOf().value,
    }
    
    console.log(bookObj);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ display: "flex", justifyContent: "end" }}>
        <Button className='clear' onClick={props.onHide} id="cancelbtn"><img src={cancel} alt="" /></Button>
      </Modal.Header>
      <Modal.Body >
        <div className='custom-modal'>
          <Form action="" id="form" onSubmit={submitHandler} className='form'>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Book Title</FormLabel>
              <FormControl type="text" name="book_title" />
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Author</FormLabel>
              <FormControl type="text" name="author" />
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Category</FormLabel>
              <FormSelect value="all" name="category">
                <option value="comedy">Comedy</option>
              </FormSelect>
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Price</FormLabel>
              <FormControl type="number" name="price" />
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Published Data</FormLabel>
              <FormControl type="date" name="date" />
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Publisher Name</FormLabel>
              <FormControl type="text" name="publisherName" />
            </div>
            <div className='dflex'>
              <FormLabel style={{ width: "200px", textAlign: "center" }}>Rate</FormLabel>
              <FormControl type="number" name="rate" />
            </div>
            <div className="d-none spinner-border" id="loading"></div>
            <Button className='btn btn-outline-primary' type="submit" >Kitob qoshish</Button>
          </Form>
        </div>
      </Modal.Body>

    </Modal>
  );
}


export default MyModal