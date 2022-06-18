import React from 'react';
import "../Stylesheets/TableDesc.css";
import { FiDatabase, FiCornerDownRight } from "react-icons/fi";

export function ViewTableDesc(props) {
  return (
    <div>
      <div className="tableHeadline">
        <p className="tableName"><FiDatabase />{props.name}</p>
      </div>
      <div>
        {Object.keys(props.data[0]).map((key, index) => {
          return <div key={index}><FiCornerDownRight /> {key} : <p className="dataType">varchar[40]</p></div>
        })}
      </div>
    </div>
  )
}

export default ViewTableDesc