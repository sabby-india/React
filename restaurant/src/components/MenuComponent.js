import React, {Component} from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name:'Burger',
                    image: 'assets/images/burger.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian spice and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                {
                    id: 1,
                    name:'Barbeque',
                    image: 'assets/images/burger.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried chicken coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                {
                    id: 2,
                    name:'Chicken Soup',
                    image: 'assets/images/burger.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a soup or is it a chicken?'                        },
                {
                    id: 3,
                    name:'Chocolate Cake',
                    image: 'assets/images/cake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
            ],
        };
    }

    render(){
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5" >
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={ dish.image } alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;
