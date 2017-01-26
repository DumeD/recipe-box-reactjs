import React, { Component } from 'react';

export default class EditPanel extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <input value={this.props.nameValue} className='form-control' id='recipeName_edit'/>
          <input  value={this.props.ingridientsValue} className='form-control' id='recipeIngridients_edit'/>
          <button className='btn btn-success' onClick={this.props.onClick}>Edit</button>
        </div>
      </div>
    );
  }
}
