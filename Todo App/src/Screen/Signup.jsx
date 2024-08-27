import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/Confg";
import { collection, addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Signup = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");

  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!number) {
      setNumberError("Phone number is required");
      valid = false;
    } else {
      setNumberError("");
    }

    return valid;
  };

  const addData = async () => {
    let userObj = {
      name,
      email,
      password,
      number,
    };

    try {
      const docRef = await addDoc(collection(db, "Sign Up Users"), userObj);
      console.log(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  const signn = async () => {
    if (!validateInputs()) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        addData();
        Navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div
      style={{
        border: "3px solid #008080",
        borderRadius: "25px",
        width: "90%",
        maxWidth: "450px",
        margin: "auto",
        textAlign: "center",
        marginTop: "100px",
      }}>
      <h1
        style={{
          color: "silver",
          fontWeight: "bold",
          fontSize: "30px",
          fontStyle: "oblique",
          fontFamily: "cursive",
          marginTop: "15px",
          marginBottom: "10px",
        }}>
        SIGNUP
      </h1>
      <div>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          style={{ width: "90%", margin: "auto", marginTop: "10px" }}
          size="lg"
          type="text"
          placeholder="Name"
          isInvalid={!!nameError}
        />
        <Form.Control.Feedback type="invalid">
          {nameError}
        </Form.Control.Feedback>
        <br />
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "90%", margin: "auto", marginTop: "10px" }}
          size="lg"
          type="email"
          placeholder="Email"
          isInvalid={!!emailError}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
        <br />
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "90%", margin: "auto", marginTop: "10px" }}
          size="lg"
          type="password"
          placeholder="Password"
          isInvalid={!!passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
        <br />
        <Form.Control
          onChange={(e) => setNumber(e.target.value)}
          style={{ width: "90%", margin: "auto", marginTop: "10px" }}
          size="lg"
          type="number"
          placeholder="Phone Number"
          isInvalid={!!numberError}
        />
        <Form.Control.Feedback type="invalid">
          {numberError}
        </Form.Control.Feedback>
        <br />
        <p
          style={{
            color: "silver",
            fontWeight: "bold",
            fontSize: "15px",
            fontStyle: "oblique",
            fontFamily: "cursive",
            marginTop: "15px",
            marginBottom: "10px",
          }}>
          Already have an account?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => Navigate("/login")}>
            LOGIN
          </span>
        </p>
        <Button
          onClick={signn}
          style={{
            width: "40%",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "20px",
          }}
          variant="secondary"
          size="lg">
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Signup;
