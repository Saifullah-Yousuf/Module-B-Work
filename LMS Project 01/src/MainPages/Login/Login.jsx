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

  const validate = () => {
    let isValid = true;

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

    return isValid;
  };

  const Loginn = () => {
    if (!validate()) return;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("USER", user);

        navigate("/dashboard");
        alert("ACCOUNT LOGIN");

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("ERROR:", errorMessage);
        if (errorMessage.includes("email")) {
          setEmailError(errorMessage);
        } else if (errorMessage.includes("password")) {
          setPasswordError(errorMessage);
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

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        error={!!emailError}
        helperText={emailError}
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "20px" }}
      />

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
      />

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
