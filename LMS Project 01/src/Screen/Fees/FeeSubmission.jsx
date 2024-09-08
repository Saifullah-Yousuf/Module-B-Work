import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import Buttons from "../../Components/Buttons";
import Swal from "sweetalert2";  

const FeeSubmission = () => {
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    fatherName: "",
    email: "",
  });

  const btns = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      firstName: "",
      fatherName: "",
      email: "",
    };

    if (!firstName) {
      newErrors.firstName = "Please fill this required.";
      valid = false;
    }
    if (!fatherName) {
      newErrors.fatherName = "Please fill this required.";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Please fill this required.";
      valid = false;
    }

    if (valid) {
      const localData = {
        "FIRST NAME": firstName,
        "FATHER NAME": fatherName,
        "EMAIL": email
      };

      localStorage.setItem('Users', JSON.stringify(localData));


      Swal.fire({
        title: 'Submission Successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      });


      setFirstName("");
      setFatherName("");
      setEmail("");
      setErrors({
        firstName: "",
        fatherName: "",
        email: "",
      });

    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "80%",
        textAlign: "center",
        minHeight: "100vh",
        marginTop: '10%'
      }}
    >
      <div
        style={{
          border: "3px solid silver",
          margin: "auto",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontStyle: "italic",
            fontWeight: "bold",
            textDecoration: "underline",
            marginTop: "15px",
            marginBottom: "10px",
            color: "#003366",
          }}
        >
          FEE SUBMISSION
        </p>

        <div>
          <Inputs
            onChange={(e) => setFirstName(e.target.value)}
            name="Name"
            types="text"
            value={firstName}
          />
          {errors.firstName && (
            <p style={{ color: "red", marginTop: "10px" }}>{errors.firstName}</p>
          )}

          <Inputs
            onChange={(e) => setFatherName(e.target.value)}
            name="Class"
            types="text"
            value={fatherName}
          />
          {errors.fatherName && (
            <p style={{ color: "red", marginTop: "10px" }}>{errors.fatherName}</p>
          )}

          <Inputs
            onChange={(e) => setEmail(e.target.value)}
            name="Amount"
            types="number"
            value={email}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "10px" }}>{errors.email}</p>
          )}

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Buttons
            onClick={btns}
            btnname="PAY"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeeSubmission;

