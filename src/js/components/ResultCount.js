import React from "react";

export default function ResultCount(props) {

    return (
        <div className="container">
            <div className="result-count text-left text-white btn my-2">{props.count} movies found</div>
        </div>
    )
}
