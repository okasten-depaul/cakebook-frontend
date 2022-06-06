import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [usernameValidation, setUsernameValidation] = useState("");
  let navigate = useNavigate();
  const pword = "";

  function isValid(userInfoObj) {
    const { username, password, confirmPassword } = userInfoObj;
    let valid = true;

    if (!username) {
      setUsernameValidation("Username cannot be blank.");
      valid = false;
    }
    if (!password) {
      setPasswordValidation("Password cannot be blank.");
      valid = false;
    }
    if (password !== confirmPassword) {
      setPasswordValidation("Passwords must match.");
      valid = false;
    }
    return valid;
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const userInfoObj = {
      username: username,
      pword: password,
    };
    console.log(username);
    console.log(password);


        try{
            const{data} = await axios.post(
                `${process.env.REACT_APP_API_URI}/api/user/sign-up`,
                userInfoObj
            )
            navigate('/login')
            
        }
     catch (err) {
        if (!err.response) {
            return
        }

    }
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)} data-testid="signup-form">
      <h4 className="mb-3">Create an Account</h4>
      <Row className="mb-3">
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleChange(e)}
              data-testid="signup-form-username-input-box"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e)}
              data-testid="signup-form-password-input-box"
            />
            <Form.Text
              className="text-danger"
              hidden={!passwordValidation}
              data-testid="signup-form-password-validator-error-text"
            >
              {passwordValidation}
            </Form.Text>
          </Col>
          <Col>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleChange(e)}
              data-testid="signup-form-confirm-password-input-box"
            />
          </Col>
        </Row>
      </Row>
      <Button
        className="text-center"
        type="submit"
        data-testid="signup-form-submit-button"
      >
        Sign Up
      </Button>
      <Link to="/login" data-testid="signup-form-login-link">
        <p className="mt-3">Have an account already?</p>
      </Link>
    </Form>
  );
};

export default SignupForm;
