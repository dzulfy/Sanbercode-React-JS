import React from "react";

const Welcome = (props) => {
    return (
        <div className="App">
            <h1 className="header">Hallo ,Saya {props.name}</h1>
            <p>Saya dari Batch 49 sudah berhasil menginstall React</p>
        </div>
    )
}

export default Welcome;