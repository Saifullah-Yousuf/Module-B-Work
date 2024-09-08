import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import Buttons from "../../Components/Buttons";
import UploadeFile from '../../Components/UploadFile';
import { db } from "../../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddSyllabus = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(""); 
  const [fatherName, setFatherName] = useState("");
  const [subject, setSubject] = useState(""); 
  const [classNumber, setClassNumber] = useState("");

  const [errors, setErrors] = useState({
    name: "", 
    fatherName: "", 
    subject: "", 
    classNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      name: "",
      fatherName: "", 
      subject: "", 
      classNumber: "",
    };

    if (!name) {
      newErrors.name = "Please fill this required field."; 
      valid = false;
    }
    if (!fatherName) { 
      newErrors.fatherName = "Please fill this required field."; 
      valid = false;
    }
    if (!subject) { 
      newErrors.subject = "Please fill this required field."; 
      valid = false;
    }
    if (!classNumber) {
      newErrors.classNumber = "Please fill this required field.";
      valid = false;
    }

    if (valid) {
      try {
        await addDoc(collection(db, "Add Syllabus"), {
          name,
          fatherName,
          subject,
          classNumber,
        });
        console.log("Data added successfully");
        setName("");
        setFatherName("");
        setSubject("");
        setClassNumber("");
        

        navigate('/dashboard/Syllabus/SyllabusList');
      } catch (error) {
        console.error("Error adding document: ", error);
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
        marginTop: '30px'
      }}
    >
      <div
        style={{
          border: "3px solid silver",
          margin: "auto",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
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
          ADD SYLLABUS
        </p>

        <div>
          <Inputs
            onChange={(e) => setName(e.target.value)} 
            name="Name" 
            types="text"
            value={name} 
            placeholder="Enter Your Name" 
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} 

          <Inputs
            onChange={(e) => setFatherName(e.target.value)} 
            name="Father Name" 
            types="text"
            value={fatherName}
            placeholder="Enter Your Father Name" 
          />
          {errors.fatherName && <p style={{ color: "red" }}>{errors.fatherName}</p>}

          <Inputs
            onChange={(e) => setSubject(e.target.value)} 
            name="Subject"
            types="text"
            value={subject} 
            placeholder="Enter Your Subject"
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}

          <Inputs
            onChange={(e) => setClassNumber(e.target.value)}
            name="Class"
            types="text"
            value={classNumber}
            placeholder="Enter Your Class"
          />
          {errors.classNumber && <p style={{ color: "red" }}>{errors.classNumber}</p>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <UploadeFile />
          </div>
          
          <div>
            <Buttons onClick={handleSubmit} btnname="Add" sx={{ width: '100%', marginBottom: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSyllabus;
