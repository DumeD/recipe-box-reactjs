import React, { Component } from 'react';

export default class Panel extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <input placeholder='Name' className='form-control' id='recipeName'/>
        <input placeholder='Ingridients' className='form-control' id='recipeIngridients'/>
        <button className='btn btn-success' onClick={this.props.onClick}>{this.props.value}</button>
      </div>
    );
  }
}
