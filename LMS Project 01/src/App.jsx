import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./MainPages/SignUp/SignUp";
import Login from "./MainPages/Login/Login";
import Dashboard from "./MainPages/Dashboard/Dashboard";
import StudentRegistration from "./Screen/Students/StudentRegistration";
import StudentList from "./Screen/Students/StudentsList";
import TeachersRegistration from "./Screen/Teachers/TeachersRegistration";
import TeachersList from "./Screen/Teachers/TeachersList";
import SubjectAdd from "./Screen/Subjects/SubjectAdd";
import SubjectList from "./Screen/Subjects/SubjectList";
import AddSyllabus from './Screen/Syllabus/AddSyllabus';
import SyllabusList from './Screen/Syllabus/SyllabusList';
import ClassForm from './Screen/Class/ClassForm';
import ClassList from './Screen/Class/ClassList';
import FeeStructure from './Screen/Fees/FeeStructure';
import FeeVoucher from './Screen/Fees/FeeVoucher';
import FeeSubmission from "./Screen/Fees/FeeSubmission";
import AdmissionForm from './Screen/Admission/AdmissionForm';
import ExamSchedule from './Screen/Exam/ExamSchedule';
import ExamResult from './Screen/Exam/ExamResult'; 
import StudentsForm from './Screen/School/StudentsForm';
import TeachersForm from './Screen/School/TeachersForm';

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="students">
            <Route path="StudentRegistration" element={<StudentRegistration />} />
            <Route path="StudentList" element={<StudentList />} />
          </Route>

          <Route path="Teachers">
            <Route path="TeachersRegistration" element={<TeachersRegistration />} />
            <Route path="TeachersList" element={<TeachersList />} />
          </Route>

          <Route path="Subjects">
            <Route path="SubjectAdd" element={<SubjectAdd />} />
            <Route path="SubjectList" element={<SubjectList />} />
          </Route>

          <Route path="Syllabus">
             <Route path="AddSyllabus" element={<AddSyllabus />} />
             <Route path="SyllabusList" element={<SyllabusList />} />
          </Route>

          <Route path="School">
            <Route path="StudentsForm" element={<StudentsForm/>} />
            <Route path="TeachersForm" element={<TeachersForm/>} />
          </Route>

          <Route path="Class">
             <Route path="ClassForm" element={<ClassForm />} />
             <Route path="ClassList" element={<ClassList />} />
          </Route>

          <Route path="Fees">
            <Route path="FeeStructure" element={<FeeStructure />} />
            <Route path="FeeVoucher" element={<FeeVoucher />} />
            <Route path="FeeSubmission" element={<FeeSubmission />} />
          </Route>

          <Route path="Admission">
            <Route path="AdmissionForm" element={<AdmissionForm />} />
          </Route>

          <Route path="Exam">
            <Route path="ExamSchedule" element={<ExamSchedule />} />
            <Route path="ExamResult" element={<ExamResult />} />
          </Route>

          {/* Similarly for other sections like Teachers, Subjects, etc. */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

