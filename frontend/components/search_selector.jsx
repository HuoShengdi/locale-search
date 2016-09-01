import React, { PropTypes } from 'react';

const SearchSelector = React.createClass({
  getInitialState(){
    return {selected: ""};
  },
  handleChange(e){
    this.setState({selected: e.target.value});
    this.props.handleSelectorChange(e.target.value);
  },
  render () {
    return (
      <div className="selector-wrapper">
        <select value={this.state.selected} onChange={this.handleChange}>
          <option></option>
          <option value={"quotationStart"}>{"Open Quote"}</option>
          <option value={"quotationEnd"}>{"Close Quote"}</option>
          <option value={"alternateQuotationStart"}>{"Alt. Open Quote"}</option>
          <option value={"alternateQuotationEnd"}>{"Alt. Close Quote"}</option>
        </select>
      </div>
    );
  }
});

export default SearchSelector;
