import React from 'react';
import HostelName from './HostelName.js'
import './Hostel.css';

function Hostel() {
    return (
        
        <>
        <div className="text"><b>Choose a Hostel</b></div>
        <div className="box">
            <HostelName name="B1" />
            <HostelName name="B2" />
            <HostelName name="B3" />
            <HostelName name="B4" />
            <HostelName name="B5" />
            <HostelName name="B6" />
        </div>
        </>
    );
  }
  
  export default Hostel;