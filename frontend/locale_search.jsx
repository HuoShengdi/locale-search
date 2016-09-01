import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './components/search_container';

const App = React.createClass({
  render () {
    return (
      <div>
        <div id='search-header'>
          <h1 id="search-title">Locale Search</h1>
          <p id="info">
            Use the dropdown menu to select a property to search for
            <br/>
            Add a new column by clicking the "Add New Column" button
            <br/>
            Clear a column by clicking the "Delete Column" button
          </p>
        </div>
        <SearchContainer />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  const storeChange = new Event('storeChange',{'bubbles': true});
  const root = document.getElementById("content");
  window.storeChange = storeChange;
  ReactDOM.render(<App/>, root);
});
