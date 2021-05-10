import React from "react";
import Logo from '../logo.svg'


export default function Menu() {
    //const [open, setOpen] = useState(false);
    
    const handleOpen = () => { };
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: 'white'}}>
                    <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                Calculate IMC
            </a>
            </div>
        </nav>
    );
}
