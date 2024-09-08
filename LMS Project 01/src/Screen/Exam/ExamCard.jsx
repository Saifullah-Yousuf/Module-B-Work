import React from "react";
import Buttons from '../../Components/Buttons';

const ExamCard = ({ title, date, subject, startclass, offclass }) => {
  return (
    <div>
      <div
        style={{
          border: "3px solid silver",
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          width: "70%",
          margin: "auto",
          height: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "30px",
              fontStyle: "italic",
              fontWeight: "bold",
              textDecoration: "underline",
              marginTop: "15px",
              marginBottom: "10px",
              color: "#003366",
              textAlign: "center",
            }}
          >
            {title}
          </p>

          <table
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              margin: "auto",
              color: "gray",
              fontSize: "20px",
              marginTop: "10px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            <tr>
              <td>Date:</td> <br />
              <td>Subject:</td> <br />
              <td>Start Class:</td> <br />
              <td>Off Class:</td> <br />
            </tr>
            <tr style={{ fontSize: "20px" }}>
              <td>{date}</td> <br />
              <td>{subject}</td> <br />
              <td>{startclass}</td> <br />
              <td>{offclass}</td> <br />
            </tr>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '15px' }}>
          <Buttons btnname='View Details' />
        </div>

      </div>
    </div>
  );
};

export default ExamCard;

