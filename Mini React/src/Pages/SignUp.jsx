import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/Firebase";
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
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!number) {
      setNumberError("Phone number is required.");
      isValid = false;
    } else if (!/^\d{11}$/.test(number)) { // Ensure exactly 10 digits
      setNumberError("Phone number must be 11 digits.");
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
      number,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "MINI SignUp"), userObj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const signn = async () => {
    if (!validate()) return;

    
    console.log("Attempting to create user...");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log("User created:", user.email); 


        addData();
        navigate("/login"); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error during sign up:", errorCode, errorMessage);


        if (errorMessage.includes("email")) {
          setEmailError("Invalid or existing email.");
        } else if (errorMessage.includes("password")) {
          setPasswordError("Password must meet the requirements.");
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
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
        backgroundColor: "#f0f0f0", 
        padding: "20px", 
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
