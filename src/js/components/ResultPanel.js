import React from "react";
import SearchFilter from "./SearchFilter/SearchFilter";
import ResultCount from "./ResultCount";

function ResultPanel() {

    return (
        <div className="pb-2 pt-2 bg-secondary resultPanel">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <ResultCount/>
                    </div>
                    <div className="col-sm">
                        <SearchFilter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPanel;
