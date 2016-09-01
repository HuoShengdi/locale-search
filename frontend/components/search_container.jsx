import React, { PropTypes } from 'react';
import SearchColumn from './search_column';

let _idCounter = 1;

const SearchContainer = React.createClass({
  getInitialState(){
    return {columns: [0]};
  },
  addColumn(){
    const newId = _idCounter;
    _idCounter += 1;
    const newColumns = this.state.columns;
    newColumns.push(newId);
    this.setState({columns: newColumns});
  },
  handleDeleteColumn(key){
    return (e)=>{
      const columnIdx = this.state.columns.indexOf(key);
      const newColumns = this.state.columns;
      newColumns.splice(columnIdx, 1);
      this.setState({columns: newColumns});
    };
  },
  render () {
    const newColumn = (
      <button
        id='new-column-button'
        className="search-button"
        onClick={this.addColumn}>{
          "Add New Column"
        }</button>
    );
    const columns = this.state.columns.map((id)=>{
      return <SearchColumn key={id} delete={this.handleDeleteColumn(id)} />;
    });
    return (
      <div id="search-container">
          {newColumn}
        <div className='columns-wrapper'>
          {columns}
        </div>
      </div>
    );
  }
});

export default SearchContainer;
