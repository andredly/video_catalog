import React from "react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import ResultCount from "../components/ResultCount";
import {setOptionSort} from "../store/search/actions";
import {connect} from "react-redux";

function ResultPanel(props) {

    return (
        <div className="pb-2 pt-2 bg-secondary resultPanel">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {props.typeResult === "movieDetails" &&
                        <ResultCount text={`Film by the ${props.movieDetails.genres} genre`}/>
                        }
                        {props.typeResult === "home" &&
                         <ResultCount text={`${props.movies.length} movies found`}/>
                         }
                    </div>
                    { props.searchFilterEnable &&
                        <div className="col-sm">
                            <SearchFilter
                                typeText={"SORT BY"}
                                firstTypeText={"RELEASE_DATA"}
                                firstTypeValue={"release_date"}
                                secondTypeText={"RATING"}
                                secondTypeValue={"vote_average"}
                                setOption={props.setOption}
                                searchParams={props.searchParams}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchParams : {
            search : state.resultOptionReducer.search,
            searchBy : state.resultOptionReducer.searchBy,
            sortBy : state.resultOptionReducer.sortBy
        },
        movies : state.moviesReducer.movies,
        movieDetails: state.moviesReducer.movieDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOption : option => {
            dispatch(setOptionSort(option))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPanel);
