import React from 'react';
import ExamRCard from './ExamRCard'

const ExamResult = () => {
  return (
    <div >
      <p
        style={{
          fontSize: "30px",
          fontStyle: "italic",
          fontWeight: "bold",
          textDecoration: "underline",
          marginTop: "15px",
          marginBottom: "10px",
          color: "#003366",
          textAlign: 'center'
        }}
      >
        EXAM RESULT
      </p>
      <div>
        <ExamRCard title='Class 01'  />
        
        <ExamRCard title='Class 02' />
        
        <ExamRCard title='Class 03' />
        
        <ExamRCard title='Class 04' />
        
        <ExamRCard title='Class 05' />
        
        <ExamRCard title='Class 06' />

        <ExamRCard title='Class 07' />
        
        <ExamRCard title='Class 08' />
        
        <ExamRCard title='Class 09' />
        
        <ExamRCard title='Class 10' />
        
        <ExamRCard title='Class 11' />

        <ExamRCard title='Class 12' />
        
      </div>
    </div>
  )
}

export default ExamResult
