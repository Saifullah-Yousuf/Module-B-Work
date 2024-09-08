import React from 'react';
import FeesCard from './FeesCard';

const FeeVoucher = () => {
  return (
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
          textAlign: 'center',
          marginTop: '30px'
        }}
      >
        FEES VOUCHER
      </p>
      <div>
        <FeesCard title='Class 01' monthfee='Rs: 800' yearlyfee='Rs:9,600' discount='Rs: 500' totalyearly='Rs: 9,100' />
        
        <FeesCard title='Class 02' monthfee='Rs: 700' yearlyfee='Rs:8,400' discount='Rs: 500' totalyearly='Rs: 7,900'  />
        
        <FeesCard title='Class 03' monthfee='Rs: 900' yearlyfee='Rs: 10,800' discount='Rs: 500' totalyearly='Rs: 10,300' />
        
        <FeesCard title='Class 04' monthfee='Rs: 1,000' yearlyfee='Rs: 12,000' discount='Rs: 500' totalyearly='RS: 11,500' />
        
        <FeesCard title='Class 05' monthfee='Rs: 1,100' yearlyfee='Rs: 13,200' discount='Rs: 500' totalyearly='RS: 12,700' />
        
        <FeesCard title='Class 06' monthfee='Rs: 1,200' yearlyfee='Rs: 14,400' discount='Rs: 500' totalyearly='RS: 13,900' />
        
        <FeesCard title='Class 07' monthfee='Rs: 1,300' yearlyfee='Rs: 15,600' discount='Rs: 500' totalyearly='RS: 15,100' />
        
        <FeesCard title='Class 08' monthfee='Rs: 1,400' yearlyfee='Rs: 16,800' discount='Rs: 500' totalyearly='RS: 13,300' />
        
        <FeesCard title='Class 09' monthfee='Rs: 1,500' yearlyfee='Rs: 18,000' discount='Rs: 500' totalyearly='RS: 17,500' />
        
        <FeesCard title='Class 10' monthfee='Rs: 1,600' yearlyfee='Rs: 19,200' discount='Rs: 500' totalyearly='RS: 18,700' />
        
        <FeesCard title='Class 11' monthfee='Rs: 1,700' yearlyfee='Rs: 20,400' discount='Rs: 500' totalyearly='RS: 19,900' />
        
        <FeesCard title='Class 12' monthfee='Rs: 1,800' yearlyfee='Rs: 21,600' discount='Rs: 500' totalyearly='RS: 21,100' />

      </div>
    </div>
  )
}

export default FeeVoucher 
