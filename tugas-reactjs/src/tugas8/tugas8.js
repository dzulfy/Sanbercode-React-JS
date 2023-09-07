import React from "react";
import { useState } from "react";

const Tugas8 = () => {
    const [number, setNumber] = useState(0);
    const handleNumber = () => {
        setNumber(number < 10 ? number + 1 : "State count sudah lebih dari 10!!", number == 0);
    };
    return(
        <div className="App">
            <h1 className="Count">{number}</h1>
            <button className="Button" onClick={handleNumber}>Tambah</button>
        </div>
    )
}


export default Tugas8;