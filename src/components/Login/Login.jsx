import React, { useEffect, useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import classes from "./Login.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import a  from "../../assets/ImgImport";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  // axios
  //   .get(
  //     "https://bookshelter-87e0a-default-rtdb.firebaseio.com/books.json",
  //     backendData
  //   )
  //   .then((res) => {
  //     localStorage.setItem("auth", res.data.idToken);
  //     setIsLoggedIn(true);
  //   })
  //   .catch((err) => {
  //     console.log(err);

  //     setError(true);
  //   });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const admin = {
    email: "admin@admin",
    password: "2976796152",
  }
  const [inValid, setInValid] = useState(false);
  const navigate = useNavigate();
  const { email, password } = form;
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (letloggedin) {
        localStorage.setItem("login",true)
        navigate("/admin")
      }

      setInValid(email.includes("@") && password.length >= 6);
    }, 1000);

    return () => {
      console.log("Clear timeout");
      clearTimeout(timeout);
    };
  }, [email, password]);
  let letloggedin = Object.keys(admin).every(item => item === admin[item]);

  const getValueFromInputHandler = (e) => {
    setForm((prevValue) => {
      return {
        ...prevValue,

        [e.target.name]: e.target.value,
      };
    });

    // props.onCheckValid(true);
  };

  const submitHandler = () => {
    props.onLogin(email, password);
  };
  return (
    <div className={`${classes.bgImg}`}>
      <div className={`${classes.layer}`}>
        <Card className={classes.login}>
          {props.isLoggedin && <p>Email or Password is invalid</p>}
          <Form className={`${classes.form}`} onSubmit={submitHandler} autoComplete="off">
            <img className={`${classes.logo}`} src={a.logo} />
            <div className={`${classes.control}`}>
              <label className='input-group-text' htmlFor="email">E-Mail</label>
              <Form.Control
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                // value={form.email}
                onChange={getValueFromInputHandler}
              />
            </div>
            <div className={`${classes.control}`}>
              <label className='input-group-text' htmlFor="password">Password</label>
              <Form.Control
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                // value={form.password}
                onChange={getValueFromInputHandler}
              />
            </div>
            <div className={classes.actions}>
              <Button
                type='submit'
                className="btn btn-outline-danger"
                disabled={!inValid}              >
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login