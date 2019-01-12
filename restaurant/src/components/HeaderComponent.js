import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand>Century</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Century Restaurant</h1>
                                <p>
                                Welcome to Century Restaurant, an authentic Indian Cuisine offers a unique luncheon and dining experience for locals and visitors. At Century we invite people to enjoy extraordinary food paired with a rich Indian lager beer or a glass of wine from our extensive wine list. Our food is very traditional, authentic and healthy, as well as affordable in a quiet, friendly atmosphere.
                                </p>
                            </div>
                        </div> 
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header;
