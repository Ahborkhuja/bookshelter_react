import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./User.css";
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import a from "../../assets/ImgImport";





function Body(p) {
  let loading = null;
  const [limitM, setlimitM] = useState(true);
  const [bookMark, setBookmark] = useState([]);
  const [book, setBook] = useState([]);
  const [check, setcheck] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    axios.get("https://bookshelter-87e0a-default-rtdb.firebaseio.com/bookmarks.json").then(res => {
      let arr=[]
      if (res.data) {
        arr = Object.keys(res.data).map((item) => {
          setlimitM(true)

          return { ...res.data[item], id: item };
        });
        setBookmark(arr);
      }
      axios.get("https://bookshelter-87e0a-default-rtdb.firebaseio.com/books.json").then(res => {
        let arr2 = Object.keys(res.data).map((item) => {
          // console.log(arr.find(value => value.id === item));
          return { ...res.data[item], id: item, saved: !!arr.find(value => value.key === item) };
        });
        setBook(arr2);
      })
    });
  }, [limitM]);


  const openBookMark = (item) => {
    p.openBook(item)
  }
  const deleteBookMark = (item) => {
    axios.delete(`https://bookshelter-87e0a-default-rtdb.firebaseio.com/bookmarks/${item}.json`).then(res => {
      setlimitM((prev)=>{
        return {...prev,[item.id]:true};
      })
    })
    if ((isLoading)) loading = (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>);
  }
  const Bookmarks = (item) => {
    setcheck((preval) => {
      return {
        ...preval, [item.id]: true
      }
    })
    if (!(bookMark.find(val => val.key === item.id))) {
      axios.post("https://bookshelter-87e0a-default-rtdb.firebaseio.com/bookmarks.json", { title: item.title, author: item.author, key: item.id })
        .then(res => {
          setlimitM(false)

        })
    }
    else {
      // setcheck(true);
    }
  }
  console.log(check);

  return (
    <>
      <div className="container">
        <div className="inner_main d-flex">
          <div
            className="bookmarks d-inline-block p-3 bg-white h-100"
            style={{ width: "300px" }}
          >
            <div className="title me-0" style={{ width: "250px" }}>
              <h3>Bookmarks</h3>
              <p>If you dont like to read, you havent found the right book</p>
            </div>
            <div className="gap-2" >
              {bookMark.map(item => (
                <div className="card m-2" key={item.id} style={{ width: "16rem" }}>
                  <div
                    className="card-body d-flex justify-content-between align-items-center"
                  >
                    <div className="card-title">
                      <h5>{item.title ? item.title : "Title unknown"}</h5>
                      <h6 className="mb-2 text-muted">{item.author ? item.author : "author unknown"}</h6>
                    </div>
                    <div
                      className="d-flex justify-content-between align-items-center gap-3"
                    >
                      <button
                        type="button"
                        className="opButn border-0 bg-transparent"
                        onClick={openBookMark}
                      ></button>
                      <button
                        type="button"
                        className="remButn border-0 bg-transparent"
                        onClick={() =>
                          deleteBookMark(item.id)}
                      >{loading}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-transparent d-flex flex-wrap w-100 p-4 gap-5"
          >
            {book.map(item => (
              <div className="card" key={item.id} style={{ width: "16rem" }}>
                <div className="bg-white p-3">
                  <div className="p-2 bg-light">
                    <img
                      src={a.python}
                      className="p-3 card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title ? item.title : "Title unknown"}</h5>
                  <p className="card-subtitle mb-2 text-muted">{item.author ? item.author : "Author unknown"}</p>
                  <p className="card-subtitle mb-2 text-muted">{item.year ? item.year : "Year unknown"}</p>
                  <div className="button-group d-flex gap-1 mb-1">
                    <Button type="button" className="warnBtn w-50" disabled={item.saved} variant="warning" onClick={() => Bookmarks(item)}>
                      {!item.saved ? "Bookmarks" : "Added"}
                    </Button>
                    <Button
                      type="button"
                      className="w-50 btn btn-light"
                      style={{ color: "#0d75ff" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      More Info
                    </Button>
                  </div>
                  <Button type="button" className="w-100 btn btn-outline-secondary">
                    Read
                  </Button>
                </div>
              </div>))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Previous</a
                >
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )

}
export default Body;