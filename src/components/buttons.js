import React from "react";

const Buttons = bnt =>{
    return(
        <button id={bnt.id} type="button" className={bnt.className}>{bnt.content}</button>
    )
}

export default Buttons