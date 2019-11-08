import React from "react";
import Logo from "./Logo";

function Footer() {

    return (
        <footer>
            <div className="navbar navbar-dark bg-secondary shadow-sm">
                <div className="container d-flex justify-content-between">
                    <Logo/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
