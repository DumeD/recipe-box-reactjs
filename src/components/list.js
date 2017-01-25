import React, { Component } from 'react';
import ListItem from './listItem';
import Panel from './panel';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.fetchRecipes = this.fetchRecipes.bind(this);
  }
  fetchRecipes() {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    return recipes.map((e) => {
      return <ListItem name={e.recipeName} delete={this.delete.bind(this, e.recipeIngridients)} key={e.recipeIngridients} edit={this.props.edit.bind(this, e.recipeName)} />
    });
  }
  edit(id) {
    var recipes = JSON.parse(localStorage.getItem('recipes'));

    for(var i = 0; i < recipes.length; i++) {
      if(recipes[i].recipeName == id) {
        var name = recipes[i].recipeName;
        var ingridients = recipes[i].recipeIngridients;
        // to continue...
      }
    }
  }
  delete(id) {
    var recipes = JSON.parse(localStorage.getItem('recipes'));

    for(var i = 0; i < recipes.length; i++) {
      if(recipes[i].recipeIngridients == id) {
        recipes.splice(i, 1);
      }
    }

    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.forceUpdate();
  }
  saveRecipes() {
    var recipeName = document.getElementById('recipeName').value;
    var recipeIngridients = document.getElementById('recipeIngridients').value;

    var recipe = {
      recipeName: recipeName,
      recipeIngridients: recipeIngridients
    };

    if(localStorage.getItem('recipes') === null) {
      var recipes = [];
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } else {
      recipes = JSON.parse(localStorage.getItem('recipes'));
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    document.getElementById('recipeName').value = '';
    document.getElementById('recipeIngridients').value = '';

    this.forceUpdate(); // rerender the component
  }
  render() {
    return (
      <div>
        <Panel onClick={this.saveRecipes.bind(this)} value='Add'/>
        {this.fetchRecipes()}
      </div>
    );
  }
}
