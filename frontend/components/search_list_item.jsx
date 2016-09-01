import React, { PropTypes } from 'react';

const SearchListItem = React.createClass({
  render () {
    return (
      <div className='result-wrapper'>
        <div className='result locale'>{this.props.locale}</div>
        <div className='result value'>{this.props.value}</div>
      </div>
    );
  }
});

export default SearchListItem;
