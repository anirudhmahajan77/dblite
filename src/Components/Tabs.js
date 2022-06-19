import { useState } from "react";
import "../Stylesheets/Tabs.css";
import DataDesc from "./DataDesc";
import Table from "./Table";
import { FiInfo } from "react-icons/fi";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Output
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Database Description
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            {props.run? <Table run={props.run} queryToRun={props.queryToRun} /> : <div className="noQuery"><FiInfo/> No query has been run yet</div>}
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <DataDesc />
        </div>
      </div>
    </div>
  );
}

export default Tabs;