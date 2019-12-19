import React from "react";

export function Loader(props) {

    if (props.load) {
        return (
            <div className="container text-center">
                Loading...
            </div>
        )
    }
}

