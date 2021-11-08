import { useState } from "react";
import "./tabs.css";
import data from './sample.json';

function Tabs() {
  const [toggleState, setToggleState] = useState("paid");

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
    </div>
  );
}

export default Tabs;