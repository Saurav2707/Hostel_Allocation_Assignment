import React from 'react';
import './HostelName.css'
function HostelName(props) {
    return(
        <div className="hostelname">{props.name}</div>
    )
}
export default HostelName;