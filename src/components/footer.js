import React from "react";
import './styles/footer.css'

export default function Footer() {
    let Year = () => {
        var d = new Date()
        return <span>{d.getFullYear()}</span>
    }
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <span className="text-muted">
                    <p id="p-footer">Copyright © {Year()} Calcular IMC</p>
                </span>
            </div>
        </footer>
    );
}