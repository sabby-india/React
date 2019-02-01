import React, {Component} from 'react';
import {Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        )
    }
    render(){
        return(
                <div>
                    <Navbar color="faded" light expand="md" >
                        <div className="container">
                            <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.jpg' height="50" width="50" alt="Restaurant Century" />
                            </NavbarBrand> 
                            <NavbarToggler onClick={this.toggleNav}  />
                            <Collapse navbar isOpen={this.state.isNavOpen}>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span> About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span> Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>   
                        </div>
                    </Navbar>
                
                
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Century Restaurant</h1>
                                <p>
                                Welcome to Century Restaurant, 
                                an authentic Indian Cuisine offers a unique 
                                luncheon and dining experience for locals and visitors. At Century we invite people to enjoy extraordinary food paired with a rich Indian lager beer or a glass of wine from our extensive wine list. Our food is very traditional, authentic and healthy, as well as affordable in a quiet, friendly atmosphere.
                                </p>
                            </div>
                        </div> 
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
export default Header;
