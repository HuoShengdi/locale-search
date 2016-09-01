import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SearchSelector from './search_selector';
import SearchListItem from './search_list_item';
import LocaleApiUtil from '../util/locale_api_util';

const SearchColumn = React.createClass({
  getInitialState(){
    return {attribute: "", results: []};
  },
  handleSelectorChange(attrName){
    this.setState({attribute: attrName});
    if (attrName){
      this.fetchAttr(attrName);
    }
  },
  fetchAttr(name){
    LocaleApiUtil.searchLocales(name, this.setResults);
  },
  setResults(results){
    this.setState({results: results});
  },
  render () {
    const deleteButton = (
      <button
        className='search-button delete'
        onClick={this.props.delete}>
        Delete Column
      </button>);
    const header = (
      <div className='column-header'>
        <div className='field locale'>Locale</div>
        <div className='field value'>Value</div>
      </div>
    );
    const resultItems = this.state.results.map((result)=>{
      return (
        <SearchListItem
          locale={result.locale}
          value={result.value}
          key={result.locale}/>
      );
    });
    return (
      <div className='column'>
        <SearchSelector handleSelectorChange={this.handleSelectorChange} />
        <div className='table-wrapper'>
          {this.state.results.length > 0 ? header : ""}
          <ul className='result-list'>
            {resultItems}
          </ul>
        </div>
        {deleteButton}
      </div>
    );
  }
});

export default SearchColumn;
