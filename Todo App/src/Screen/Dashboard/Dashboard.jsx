import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../../Config/Confg";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Dashboard = () => {
  const [userwork, setUserwork] = useState("");
  const [userworkall, setUserworkall] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from Firebase when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "TodoAppWork"));
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, task: doc.data().task });
      });
      setUserworkall(tasks);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const inputChange = (e) => {
    setUserwork(e.target.value);
  };

  const firebaseAdd = async (task) => {
    try {
      const docRef = await addDoc(collection(db, "TodoAppWork"), { task });
      setUserworkall((prev) => [...prev, { id: docRef.id, task }]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const add = () => {
    if (userwork.trim()) {
      firebaseAdd(userwork);
      setUserwork("");
    } else {
      alert("Please Enter Work");
    }
  };

  const firebaseEdit = async (id, newTask) => {
    const taskRef = doc(db, "TodoAppWork", id);
    try {
      await updateDoc(taskRef, { task: newTask });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const edit = (index) => {
    let prompts = prompt("Please Enter New Work", userworkall[index].task);
    if (prompts !== null && prompts.trim()) {
      let updatedTask = prompts;
      let newWorkArray = [...userworkall];
      newWorkArray[index].task = updatedTask;
      setUserworkall(newWorkArray);

      // Update the task in Firebase
      firebaseEdit(userworkall[index].id, updatedTask);
    }
  };

  const firebaseDelete = async (id) => {
    const taskRef = doc(db, "TodoAppWork", id);
    try {
      await deleteDoc(taskRef);
      setUserworkall((prev) => prev.filter((task) => task.id !== id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const del = (id) => {
    firebaseDelete(id);
  };

  const firebaseDeleteAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "TodoAppWork"));
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      setUserworkall([]);
    } catch (e) {
      console.error("Error deleting all documents: ", e);
    }
  };

  if (loading) {
    // return <p>Loading...</p>;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
          alignItems: "center",
          fontSize: "30px",
        }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "none",
        margin: "auto",
        width: "90%",
        maxWidth: "600px",
        height: "300px",
        textAlign: "center",
      }}>
      <p
        style={{
          fontSize: "60px",
          color: "silver",
          textShadow: "2px 4px 5px #000000",
          marginTop: "10px",
          marginBottom: "15px",
          textDecoration: "underline",
          fontStyle: "oblique",
          fontWeight: "bolder",
        }}>
        Todo App
      </p>
      <Form.Control
        value={userwork}
        onChange={inputChange}
        style={{
          marginTop: "20px",
          width: "100%",
          color: "silver",
          backgroundColor: "rgba(0,0,0,0.5)",
          fontWeight: "bold",
          fontSize: "25px",
          fontStyle: "oblique",
          fontFamily: "cursive",
        }}
        size="lg"
        type="text"
        placeholder="Work Please"
      />
      <div className="d-flex d-grid gap-2 mt-3">
        <Button
          style={{ width: "50%" }}
          onClick={add}
          variant="primary"
          size="lg">
          ADD
        </Button>
        <Button
          style={{ width: "50%" }}
          onClick={firebaseDeleteAll}
          variant="secondary"
          size="lg">
          DELETE ALL
        </Button>
      </div>

      <div>
        {userworkall.map((e, i) => (
          <div key={e.id} style={{ marginTop: "15px", marginBottom: "10px" }}>
            <p
              style={{
                color: "silver",
                backgroundColor: "rgba(0,0,0,0.2)",
                fontWeight: "bold",
                fontSize: "25px",
                fontStyle: "oblique",
                fontFamily: "cursive",
              }}>
              {e.task}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 50%)",
                justifyContent: "space-around",
                gap: "2rem",
                alignItems: "center",
                margin: "auto",
              }}>
              <div>
                <Button
                  onClick={() => edit(i)}
                  style={{ width: "70%" }}
                  variant="primary"
                  size="lg">
                  EDIT
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => del(e.id)}
                  style={{ width: "70%" }}
                  variant="secondary"
                  size="lg">
                  DELETE
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
