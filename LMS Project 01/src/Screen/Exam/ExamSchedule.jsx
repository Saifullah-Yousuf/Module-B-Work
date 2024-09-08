import React from 'react';
import ExamCard from './ExamCard'

const ExamSchedule = () => {
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
        EXAM SCHEDULE
      </p>
      <div>
        <ExamCard title='Class 01' date='2024-09-01' subject='Mathematics' startclass='09:00 AM' offclass='10:00 PM' />
        
        <ExamCard title='Class 01' date='2024-09-02' subject='English' startclass='10:30 AM' offclass='11:30 PM'  />
        
        <ExamCard title='Class 02' date='2024-09-03' subject='Urdu' startclass='09:30 AM' offclass='11:00 PM' />
        
        <ExamCard title='Class 02' date='2024-09-04' subject='English' startclass='12:00 AM' offclass='01:00 PM' />
        
        <ExamCard title='Class 03' date='2024-09-05' subject='Mathematics' startclass='11:00 AM' offclass='12:30 PM' />
        
        <ExamCard title='Class 03' date='2024-09-06' subject='English' startclass='09:00 AM' offclass='10:00 PM' />
        
        <ExamCard title='Class 04' date='2024-09-07' subject='Computer' startclass='08:00 AM' offclass='09:30 PM' />
        
        <ExamCard title='Class 04' date='2024-09-08' subject='Islamiat' startclass='10:30 AM' offclass='12:00 PM' />
        
        <ExamCard title='Class 05' date='2024-09-09' subject='English' startclass='11:30 AM' offclass='01:00 PM' />
        
        <ExamCard title='Class 05' date='2024-09-10' subject='Urdu' startclass='12:00 AM' offclass='01:00 PM' />
        
        <ExamCard title='Class 06' date='2024-09-12' subject='Mathematics' startclass='08:00 AM' offclass='10:00 PM' />
        
        <ExamCard title='Class 06' date='2024-09-13' subject='Science' startclass='09:45 AM' offclass='11:20 PM' />

        <ExamCard title='Class 07' date='2024-09-13' subject='Science' startclass='09:45 AM' offclass='11:20 PM' />

        <ExamCard title='Class 07' date='2024-09-14' subject='English' startclass='12:00 AM' offclass='01:00 PM' />

        <ExamCard title='Class 08' date='2024-09-15' subject='Mathematics' startclass='11:00 AM' offclass='12:30 PM' />
        
        <ExamCard title='Class 08' date='2024-09-16' subject='English' startclass='09:00 AM' offclass='10:00 PM' />
        
        <ExamCard title='Class 09' date='2024-09-17' subject='Computer' startclass='08:00 AM' offclass='09:30 PM' />
        
        <ExamCard title='Class 09' date='2024-09-18' subject='Islamiat' startclass='10:30 AM' offclass='12:00 PM' />
        
        <ExamCard title='Class 10' date='2024-09-19' subject='English' startclass='11:30 AM' offclass='01:00 PM' />
        
        <ExamCard title='Class 10' date='2024-09-20' subject='Urdu' startclass='12:00 AM' offclass='01:00 PM' />
        
        <ExamCard title='Class 11' date='2024-09-21' subject='Mathematics' startclass='08:00 AM' offclass='10:00 PM' />
        
        <ExamCard title='Class 11' date='2024-09-22' subject='Science' startclass='09:45 AM' offclass='11:20 PM' />

        <ExamCard title='Class 12' date='2024-09-23' subject='Science' startclass='09:45 AM' offclass='11:20 PM' />

        <ExamCard title='Class 12' date='2024-09-24' subject='Science' startclass='09:45 AM' offclass='11:20 PM' />
        
      </div>
    </div>
  )
}

export default ExamSchedule
