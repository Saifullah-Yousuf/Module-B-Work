import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const Loginn = () => {
    let valid = true;

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

    if (!valid) return;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div>
      <div
        style={{
          border: "3px solid #008080",
          borderRadius: "25px",
          width: "90%",
          maxWidth: "450px",
          margin: "auto",
          textAlign: "center",
          marginTop: "160px",
        }}>
        <p
          style={{
            color: "silver",
            fontWeight: "bold",
            fontSize: "30px",
            fontStyle: "oblique",
            fontFamily: "cursive",
            marginTop: "15px",
            marginBottom: "10px",
          }}>
          LOGIN
        </p>

        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "90%", margin: "auto", marginTop: "10px" }}
          size="lg"
          type="text"
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
        <Button
          onClick={Loginn}
          style={{
            width: "40%",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "15px",
          }}
          variant="secondary"
          size="lg">
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Login;
