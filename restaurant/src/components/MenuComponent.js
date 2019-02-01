import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import {Link} from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }   
    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1" >
                    <Card key={dish.id} >
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu  </BreadcrumbItem>                          
                       
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>       
                   
            </div>
           
        );
    }
}

export default Menu;
