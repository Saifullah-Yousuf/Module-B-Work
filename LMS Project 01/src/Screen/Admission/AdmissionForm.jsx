import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import Radiobtns from "../../Components/Radiobtns";
import Buttons from "../../Components/Buttons";
import { db } from "../../Config/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ClassForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [radioButtons, setRadioButtons] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    qualification: "",
    dateOfBirth: "",
    radioButtons: "",
  });

  const btns = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      firstName: "",
      fatherName: "",
      email: "",
      phoneNumber: "",
      qualification: "",
      dateOfBirth: "",
      radioButtons: "",
    };

    if (!firstName) {
      newErrors.firstName = "Please fill this required field.";
      valid = false;
    }
    if (!fatherName) {
      newErrors.fatherName = "Please fill this required field.";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Please fill this required field.";
      valid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Please fill this required field.";
      valid = false;
    }
    if (!qualification) {
      newErrors.qualification = "Please fill this required field.";
      valid = false;
    }
    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Please select a date.";
      valid = false;
    }
    if (!radioButtons) {
      newErrors.radioButtons = "Please fill all options.";
      valid = false;
    }

    if (valid) {
      try {
        const querySnapshot = await getDocs(collection(db, "Class Form"));
        const newId = querySnapshot.docs.length + 1;


        await addDoc(collection(db, "Class Form"), {
          id: newId,
          firstName,
          fatherName,
          email,
          phoneNumber,
          qualification,
          dateOfBirth,
          gender: radioButtons,
          timestamp: new Date(), 
        });


        setFirstName("");
        setFatherName("");
        setEmail("");
        setPhoneNumber("");
        setQualification("");
        setDateOfBirth("");
        setRadioButtons("");


        navigate('/dashboard/Class/ClassList');
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
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
      }}
    >
      <div
        style={{
          border: "3px solid silver",
          margin: "auto",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          marginTop: '30px'
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
          ADMISSION FORM
        </p>

        <div>
          <Inputs
            onChange={(e) => setFirstName(e.target.value)}
            name="First Name"
            types="text"
            value={firstName}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}

          <Inputs
            onChange={(e) => setFatherName(e.target.value)}
            name="Father Name"
            types="text"
            value={fatherName}
          />
          {errors.fatherName && (
            <p style={{ color: "red" }}>{errors.fatherName}</p>
          )}

          <Inputs
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            types="email"
            value={email}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <Inputs
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="Phone Number"
            types="number"
            value={phoneNumber}
          />
          {errors.phoneNumber && (
            <p style={{ color: "red" }}>{errors.phoneNumber}</p>
          )}

          <Inputs
            onChange={(e) => setDateOfBirth(e.target.value)}
            types="date"
            value={dateOfBirth}
            style={{ marginTop: "8px" }}
          />
          {errors.dateOfBirth && (
            <p style={{ color: "red" }}>{errors.dateOfBirth}</p>
          )}

          <Inputs
            onChange={(e) => setQualification(e.target.value)}
            name="Qualification"
            types="text"
            value={qualification}
          />
          {errors.qualification && (
            <p style={{ color: "red" }}>{errors.qualification}</p>
          )}
        </div>

        <div
          style={{
            width: "80%",
            textAlign: "left",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <Radiobtns
            input01="Female"
            input02="Male"
            input03="Other"
            value01="Female"
            value02="Male"
            value03="Other"
            headingname="Gender"
            onChange={(e) => setRadioButtons(e.target.value)}
          />
          {errors.radioButtons && (
            <p style={{ color: "red" }}>{errors.radioButtons}</p>
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
            btnname="Submit"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassForm;
