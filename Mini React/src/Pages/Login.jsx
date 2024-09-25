import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Box, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const validate = () => {
    let isValid = true;

    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const Loginn = () => {
    if (!validate()) return;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Clear the input fields
        setEmail("");
        setPassword("");
        setGeneralError("");

        // Navigate to home page upon successful login
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;

        // General error messages, no specifics for security
        setGeneralError("Invalid login credentials. Please try again.");

        // Logging the error code only for debugging in development
        if (process.env.NODE_ENV === "development") {
          console.error("Login error:", errorCode);
        }
      });
  };

  return (
    <Box
      sx={{
        border: "3px solid #008080",
        borderRadius: "25px",
        width: "90%",
        maxWidth: "450px",
        margin: "auto",
        textAlign: "center",
        marginTop: "160px",
        padding: "20px",
        bgcolor: "#f0f0f0",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "silver",
          fontWeight: "bold",
          fontStyle: "oblique",
          fontFamily: "cursive",
          marginBottom: "20px",
        }}
      >
        LOGIN
      </Typography>

      {/* Email Input */}
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        error={!!emailError}
        helperText={emailError}
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "20px" }}
        inputProps={{
          autoComplete: "off", // Prevents browsers from storing sensitive information
        }}
      />

      {/* Password Input */}
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        error={!!passwordError}
        helperText={passwordError}
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        sx={{ marginBottom: "20px" }}
        inputProps={{
          autoComplete: "off", // Prevents browsers from storing sensitive information
        }}
      />

      {/* General Error Message */}
      {generalError && (
        <Typography color="error" sx={{ marginBottom: "20px" }}>
          {generalError}
        </Typography>
      )}

      {/* Login Button */}
      <Button
        onClick={Loginn}
        variant="contained"
        color="primary"
        sx={{
          width: "40%",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "15px",
          bgcolor: "#008080",
        }}
      >
        LOGIN
      </Button>
    </Box>
  );
};

export default Login;
