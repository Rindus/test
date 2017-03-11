import React, { Component } from 'react';
import FoodCard from "./FoodCard";
import "./Food.css";
import jsonFallback from "./FoodFallback.json";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        meat: true,
        vegetable: true,
        fruit: true
      },
      food: []
    };
  }
  componentDidMount(){
  fetch('/api/food.json')  
    .then(  
      (response) => {  
        if (response.status !== 200) {  
          this.setState({food: jsonFallback});
          
          return;  
        }

        // Examine the text in the response  
        response.json().then((food) => {  
          this.setState({food: food});
          
        });
      }  
    )  
    .catch((err) => {  
      this.setState({food: jsonFallback});
      console.log('Fetch Error :-S', err);
    });
  }
  toggleFilters(name) {
    let result = {filters: Object.assign({},this.state.filters)};
    result.filters[name] = !this.state.filters[name];
    this.setState(result);
  }
  getFoodListClass() {
    const {filters} = this.state;
    const baseClass = "Food__list";
    let result = baseClass;
    for(let key in filters) {
      if (!filters[key]) result += ` ${key}-hidden`;
    }
    return result;
  }
  isAlimentDisplayed(aliment) {
    return this.state.filters[aliment.type.toLowerCase()];
  }
  getDisplayedAliments() {
    return this.state.food.filter((aliment) => this.isAlimentDisplayed(aliment));
  }
  getHiddenAliments() {
    return this.state.food.filter((aliment) => !this.isAlimentDisplayed(aliment));
  }
  render() {
    const {filters, food} = this.state;

    return (
    <section className="Food">
      <div className="Food__filters">
        <span className="Food__filters__title">Filters: </span>
        <label className="Food__filters__item Food__label Food__label--meat"><input type="checkbox" checked={filters.meat} onChange={() => this.toggleFilters("meat")}/>Meat</label>
        <label className="Food__filters__item Food__label Food__label--vegetable"><input type="checkbox" checked={filters.vegetable} onChange={() => this.toggleFilters("vegetable")}/>Vegetable</label>
        <label className="Food__filters__item Food__label Food__label--fruit"><input type="checkbox" checked={filters.fruit} onChange={() => this.toggleFilters("fruit")}/>Fruit</label>
        <span> Listed food: {this.getDisplayedAliments().length}</span>
      </div>

      <div className={this.getFoodListClass()}>
        {food.map((aliment, index) =>
        <FoodCard {...aliment} key={"FoodCard--" + aliment.id} />
        )}
      </div>
       
      
    </section>
  );}
}