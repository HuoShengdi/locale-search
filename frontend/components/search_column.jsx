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
    console.log(results);
    this.setState({results: results});
  },
  render () {
    const deleteButton = <button className='search-button' onClick={this.props.delete}>Delete Column</button>;
    const resultItems = this.state.results.map((result)=>{
      return (
        <SearchListItem
          locale={result.locale}
          value={result.value}
          key={result.locale}/>
      );
    });
    return (
      <div>
        <SearchSelector handleSelectorChange={this.handleSelectorChange} />
        <ul className='result-list'>
          {resultItems}
        </ul>
        {deleteButton}
      </div>
    );
  }
});

export default SearchColumn;
