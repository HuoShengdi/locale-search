import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './components/search_container';

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Locale Search</h1>
        <p>Use the dropdown menu to select a property to search for</p>
        <SearchContainer />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("content");
  ReactDOM.render(<App/>, root);
});
