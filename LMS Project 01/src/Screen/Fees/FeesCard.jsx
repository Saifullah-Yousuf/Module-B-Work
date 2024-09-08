import React from "react";
import Buttons from '../../Components/Buttons'
import { useNavigate } from "react-router-dom";

const FeesCard = ({ title, monthfee, yearlyfee, discount, totalyearly }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          border: "3px solid silver",
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          borderTopRightRadius: "40px",
          borderBottomLeftRadius: "40px",
          width: "90%",
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
              
            }}
          >
            <tr>
              <td>Monthly Fee:</td> <br />
              <td>Yearly Fee:</td> <br />
              <td>Yearly Discount:</td> <br />
              <td>Total Yearly Fee:</td> <br />
            </tr>
            <tr style={{ fontSize: "20px" }}>
              <td>{monthfee}</td> <br />
              <td>{yearlyfee}</td> <br />
              <td>{discount}</td> <br />
              <td>{totalyearly}</td> <br />
            </tr>
          </table>

          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', marginTop: '15px'}}>
            <Buttons onClick={(e)=> {
              e.preventDefault();
              navigate('/dashboard/Fees/FeeSubmission')
              }} style={{width: '100%'}} btnname='Pay Now'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCard;
