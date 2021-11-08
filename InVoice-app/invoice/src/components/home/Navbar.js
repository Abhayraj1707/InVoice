import React, { useState } from "react";
import Datatable from "./datatable";
import data from "./sample.json";
import NavTool from "./NavTool";

export default function Navbar(props) {
  const [q, setq] = useState("");

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    // columns.map((column) => console.log(column))
    return rows.filter((row) =>
      columns.some((column) => row[column].toLowerCase().indexOf(q) > -1)
    );
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            InVoice
          </a>
          <div class="d-flex flex-row-reverse">
            <button class="p-2" onClick={()=>props.setShowHome(0)} >LOGOUT</button>
            <button class="p-2">CREATE NEW INVOICE</button>
          </div>
        </div>
      </nav>
      <form className="d-flex mt-4">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search By InvoiceID"
          aria-label="Search"
          onChange={(e) => setq(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <NavTool data = {search(data)}/>
      <Datatable data={search(data)} />
    </div>
  );
}
