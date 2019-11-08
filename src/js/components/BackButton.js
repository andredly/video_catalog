import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export function BackButton() {

    return (
        <button className="navbar-toggler" type="button">
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    )
}

