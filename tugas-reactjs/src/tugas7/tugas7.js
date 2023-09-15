import React from "react";

const Tugas7 = (props) => {
    return (
        <div className="App">
            <h1 className="header">Data diri peserta kelas Reactjs</h1>
            <ul>
                <li>Nama lengkap : {props.name}</li>
                <li>Email : {props.email}</li>
                <li>Batch Pelatihan : {props.batch}</li>
            </ul>
        </div>
    )
}

export default Tugas7;