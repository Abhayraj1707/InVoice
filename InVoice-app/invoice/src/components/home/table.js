import React from 'react'
// import Navbar from '../Navbar'
import data from './sample.json';
import Datatable from './datatable';
import "./table.css"

function table() {
    return (
        <div className = "container mt-4">
           <Datatable data = {data}/> 
        </div>
    )
}

export default table;