import React from "react";

const Buttons = bnt =>{
    return(
        <button id={bnt.id} type="button" className={bnt.className} onClick={bnt.onClick}>{bnt.content}</button>
    )
}

export default Buttons