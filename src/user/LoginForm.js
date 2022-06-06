import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { loginSuccess } from "../redux/reducers/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const userInfoObj = {
      username: username,
      pword: password,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/user/login`,
        userInfoObj
      );
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (err) {
      if (!err.response) {
        return;
      }
      const errorMessage = err?.response?.data;
    }
  }

  return (
    <>
      <Form
        className="text-center"
        onSubmit={(e) => handleLoginSubmit(e)}
        data-testid="login-form"
      >
        <h4>Member Login</h4>
        <Form.Group className="mb-3">
          <Form.Control
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="login-form-email-input-box"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="login-form-password-input-box"
          />
        </Form.Group>
        <Button
          className="text-center"
          type="submit"
          data-testid="login-form-submit-button"
        >
          Login
        </Button>
        <Link to="/sign-up" data-testid="login-form-link-to-sign-up-page">
          <p className="mt-3">Don't have an account?</p>
        </Link>
      </Form>
    </>
  );
};

export default LoginForm;
