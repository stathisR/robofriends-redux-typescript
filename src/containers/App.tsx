import React from "react";
import RobotsCardList from "../features/robots/RobotsCardList";
import SearchBox from "../features/search/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox />
      <ErrorBoundary>
        <Scroll>
          <RobotsCardList />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

export default App;