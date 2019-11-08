import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {

    return (
        <header>
            <div className="navbar navbar-dark bg-secondary shadow-sm">
                <div className="container d-flex justify-content-between">
                  <Logo/>
                    <button className="navbar-toggler" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
