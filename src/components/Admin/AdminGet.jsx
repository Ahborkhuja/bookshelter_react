import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import a from "../../assets/ImgImport";

import axios from 'axios';

function AdminGet() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get("https://bookshelter-87e0a-default-rtdb.firebaseio.com/books.json")
    .then(res=>{
      let arr=[];
      if (res.data) {
        arr=Object.keys(res.data).map(element =>{
          return {...res.data[element],id:element}
        })
        setBook(arr);
      }
    })
  }, []);
  return (
    <>
      {book.map(item => (
          <div key={item.id} className="cost">
            <img src={a.python} alt="" className="" />
            <div>
              <p>{item.title}</p>
              <p>{item.author} | {item.year}</p>
              <img src="./img/i.png" alt="i" />
              <p>Cost: {item.cost ? item.cost : "This book is not available" }</p>
              <div className="button">
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default AdminGet