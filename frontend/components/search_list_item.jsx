import React, { PropTypes } from 'react';

const SearchListItem = React.createClass({
  render () {
    return (
      <div>
        <div className='result locale'>{`Locale: ${this.props.locale}`}</div>
        <div className='result value'>{`Value: ${this.props.value}`}</div>
      </div>
    );
  }
});

export default SearchListItem;
