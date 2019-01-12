import React, {Component} from 'react';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null,
            dishes: DISHES,
        }
    }
    onDishSelect(dishId){
        this.setState({ selectedDish: dishId});
    }

    render(){
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                         <NavbarBrand href="/">Century</NavbarBrand>
                    </div>            
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        )

    }
}
export default Main;
