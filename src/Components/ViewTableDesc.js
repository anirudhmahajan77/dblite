import React, { useState } from 'react';
import "../Stylesheets/TableDesc.css";
import { FiDatabase, FiCornerDownRight } from "react-icons/fi";
import Table from './Table';

export function ViewTableDesc(props) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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