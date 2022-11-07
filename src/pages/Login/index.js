import React from "react";
import "./index.css";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="sign-section">
      <div className="sign-form">
        <div className="square"></div>
        <h1>Welcome Back!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="6+ Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="btn-submit">
              Sign In
            </Button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="sign-link">
              Sign Up for free
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img"/>
    </section>
  );
};

export default Login;
