import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import ResultPanel from '../containers/ResultPanel';
import ResultsBody from '../components/ResultBody/ResultsBody';

function HomePage() {
  return (
    <>
            <div className={'home-page'}></div>
            <SearchContainer/>
            <ResultPanel searchFilterEnable={true} typeResult="home"/>
            <ResultsBody movies={[]}/>
    </>
  );
}

export default HomePage;
