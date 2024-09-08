import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");

  const validate = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!number) {
      setNumberError("Phone number is required.");
      isValid = false;
    } else {
      setNumberError("");
    }

    return isValid;
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
    if (!validate()) return;

    console.log("NAME", name);
    console.log("EMAIL", email);
    console.log("PASSWORD", password);
    console.log("NUMBER", number);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        addData();
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("ERROR:", errorCode, errorMessage);
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
        backgroundColor: "#f0f0f0", // Set background color
        padding: "20px", // Add padding for better spacing
      }}
    >
      <h1
        style={{
          color: "#008080",
          fontWeight: "bold",
          fontSize: "30px",
          fontStyle: "oblique",
          fontFamily: "cursive",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        SIGNUP
      </h1>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={!!nameError}
          helperText={nameError}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={!!passwordError}
          helperText={passwordError}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          error={!!numberError}
          helperText={numberError}
        />
        <p
          style={{
            color: "#008080",
            fontWeight: "bold",
            fontSize: "15px",
            fontStyle: "oblique",
            fontFamily: "cursive",
            marginTop: "15px",
            marginBottom: "10px",
          }}
        >
          Already have an account?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            LOGIN
          </span>
        </p>
        <Button
          onClick={signn}
          sx={{
            width: "40%",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "15px",
            bgcolor: "#008080",
          }}
          variant="contained"
          color="primary"
          size="lg"
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default SignUp;