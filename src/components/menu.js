import React from "react";
import Logo from '../assets/img/bascula.svg'
import { Link } from 'react-router-dom';


export default function Menu() {
    //const [open, setOpen] = useState(false);

    const handleOpen = () => { };
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand" style={{ color: 'white' }}>
                        <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        <span style={{ marginLeft: "5px" }}>Calculate IMC</span>
                </Link>
            </div>
        </nav>
    );
}
