import React, { useEffect, useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import classes from "./Login.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/Logo.svg"
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    age: "",
  });

  const [inValid, setInValid] = useState(false);
  const navigate = useNavigate();
  const { email, password } = form;
  const admin = {
    email: "admin@admin",
    password: "2976796152",
  }
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Validate");
      setInValid(email.includes("@") && password.length >= 6);
    }, 1000);

    return () => {
      console.log("Clear timeout");
      clearTimeout(timeout);
    };
  }, [email, password]);

  const getValueFromInputHandler = (e) => {
    setForm((prevValue) => {
      return {
        ...prevValue,

        [e.target.name]: e.target.value,
      };
    });

    props.onCheckValid(true);
  };

  const submitHandler = () => {
    if (form === admin) {
      navigate("/admin")
    }else  props.onLogin(email, password);
  };
  return (
    <div className={`${classes.bgImg}`}>
      <div className={`${classes.layer}`}>
        <Card className={classes.login}>
          {props.isLoggedin && <p>Email or Password is invalid</p>}
          <Form className={`${classes.form}`} onSubmit={submitHandler} autoComplete="off">
            <img className={`${classes.logo}`} src={Logo} />
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
                className="btn btn-danger"
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