import { useState, useEffect } from "react";
import "./tabs.css";
import Datatable from "./datatable";

function Tabs({ data }) {
  const [toggleState, setToggleState] = useState("Paid");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function payment(rows) {
    return rows.filter((row) => row.statusH === toggleState);
  }

  useEffect(() => {}, [toggleState]);

  return (
    <div className="container">
      <div className="bloc-tabs mt-4">
        <button
          className={toggleState === "Paid" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("Paid")}
        >
          Paid
        </button>
        <button
          className={toggleState === "Pending" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("Pending")}
        >
          Pending
        </button>
        <button
          className={toggleState === "Late" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("Late")}
        >
          Late/Due
        </button>
      </div>
      <Datatable data={payment(data)} />
    </div>
  );
}

export default Tabs;
