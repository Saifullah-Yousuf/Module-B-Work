import React, { useState, useEffect } from 'react';
import StudentsTable from './StudentTable';
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Students Regis"));
      const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data()
      }));
      setStudents(studentsData);
    };
    fetchData();
  }, []);

  return (
    <div>
        <div>
          <StudentsTable students={students} />
        </div>
    </div>
  );
};

export default StudentsList;
