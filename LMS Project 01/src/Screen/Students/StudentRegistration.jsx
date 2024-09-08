import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import Radiobtns from "../../Components/Radiobtns";
import Buttons from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
import { db } from "../../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";

const StudentRegistration = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [radioButtons, setRadioButtons] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    classNumber: "",
    radioButtons: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      classNumber: "",
      radioButtons: "",
    };

    let valid = true;

    if (!firstName) {
      newErrors.firstName = "Enter First Name.";
      valid = false;
    }
    if (!lastName) {
      newErrors.lastName = "Please Fill This Required.";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Please Fill This Required.";
      valid = false;
    }
    if (!classNumber) {
      newErrors.classNumber = "Please Fill This Required.";
      valid = false;
    }
    if (!radioButtons) {
      newErrors.radioButtons = "Please Fill All Option.";
      valid = false;
    }

    if (valid) {
      try {
        const TableDataSend = {
          id: Date.now(), 
          firstName,
          lastName,
          email,
          classNumber,
          radioButtons,
        };


        await addDoc(collection(db, "Students Regis"), TableDataSend);


        navigate("/dashboard/students/StudentList", { state: { TableDataSend } });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ margin: "auto", width: "80%", textAlign: "center", minHeight: "100vh", marginTop: '30px'}}>
      <div style={{ border: "3px solid silver", margin: "auto", width: "100%", maxWidth: "700px", textAlign: "center" }}>
        <p style={{ fontSize: "30px", fontStyle: "italic", fontWeight: "bold", textDecoration: "underline", marginTop: "15px", marginBottom: "10px", color: "#003366" }}>
          REGISTRATION FORM
        </p>

        <div>
          <Inputs onChange={(e) => setFirstName(e.target.value)} name="First Name" types="text" value={firstName} />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

          <Inputs onChange={(e) => setLastName(e.target.value)} name="Last Name" types="text" value={lastName} />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

          <Inputs onChange={(e) => setEmail(e.target.value)} name="Email" types="email" value={email} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <Inputs onChange={(e) => setClassNumber(e.target.value)} name="Class" types="number" value={classNumber} />
          {errors.classNumber && <p style={{ color: "red" }}>{errors.classNumber}</p>}
        </div>

        <div style={{ width: "80%", textAlign: "left", margin: "auto", marginTop: "20px" }}>
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
          {errors.radioButtons && <p style={{ color: "red" }}>{errors.radioButtons}</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
          <Buttons onClick={handleSubmit} btnname="Submit" sx={{ width: '100%', marginBottom: '20px' }} />
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
