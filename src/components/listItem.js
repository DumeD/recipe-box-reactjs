import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <div className='well ingredients'>
        {this.props.name}
        <div className='ingredients_btn'>
          <button type='button' onClick={this.props.edit} className='btn btn-default'>Edit</button>
          <button type='button' onClick={this.props.delete} className='btn btn-danger'>Delete</button>
        </div>
      </div>
    );
  }
}
