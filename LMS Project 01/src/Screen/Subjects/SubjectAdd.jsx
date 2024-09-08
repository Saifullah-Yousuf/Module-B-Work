import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import Radiobtns from "../../Components/Radiobtns";
import Buttons from "../../Components/Buttons";
import { db } from "../../Config/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SubjectAdd = () => {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [subject, setSubject] = useState(""); 
  const [classNumber, setClassNumber] = useState("");
  const [radioButtons, setRadioButtons] = useState("");

  const [errors, setErrors] = useState({
    name: "", 
    fatherName: "", 
    subject: "", 
    classNumber: "",
    radioButtons: "",
  });

  const handleAdd = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: "", 
      fatherName: "", 
      subject: "", 
      classNumber: "",
      radioButtons: "",
    };

    let valid = true;

    if (!name) { 
      newErrors.name = "Please Fill This Required.";
      valid = false;
    }
    if (!fatherName) { 
      newErrors.fatherName = "Please Fill This Required."; 
      valid = false;
    }
    if (!subject) { 
      newErrors.subject = "Please Fill This Required."; 
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
        const querySnapshot = await getDocs(collection(db, "Add Subject"));
        const subjects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const nextId = subjects.length ? Math.max(subjects.map(sub => parseInt(sub.id))) + 1 : 1;

        const SubjectData = {
          id: nextId.toString(),
          name,
          fatherName,
          subject,
          classNumber,
          radioButtons,
        };

        await addDoc(collection(db, "Add Subject"), SubjectData);

        setName("");
        setFatherName("");
        setSubject("");
        setClassNumber("");
        setRadioButtons("");
        console.log("Subject Added:", SubjectData);

        navigation('/dashboard/Subjects/SubjectList');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ margin: "auto", width: "80%", textAlign: "center", minHeight: "100vh", marginTop: '30px'}}>
      <div style={{ border: "3px solid silver", margin: "auto", width: "100%", maxWidth: "700px", textAlign: "center", padding: "20px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "30px", fontStyle: "italic", fontWeight: "bold", textDecoration: "underline", marginTop: "15px", marginBottom: "10px", color: "#003366" }}>
          ADD SUBJECTS
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
            placeholder="Father Name" 
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

        <div style={{ width: "80%", textAlign: "left", margin: "auto", marginTop: "20px" }}>
          <Radiobtns 
            input01='General Science'
            input02='Pre-Engineering'
            input03='Commerce'
            value01='General Science' 
            value02='Pre-Engineering'
            value03='Commerce'
            headingname='Select Group'
            onChange={(e) => setRadioButtons(e.target.value)} 
          />
          {errors.radioButtons && <p style={{ color: "red" }}>{errors.radioButtons}</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
          <Buttons onClick={handleAdd} btnname="Add" sx={{ width: '100%', marginBottom: '20px' }} />
        </div>
      </div>
    </div>
  );
};

export default SubjectAdd;



