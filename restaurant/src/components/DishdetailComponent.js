import React, {Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component{
     constructor(props){
         super(props);
     }
     renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>                  
                </Card>
            );
        }
    }
    renderComments(comments){
        if(comments != null){      
           return(
               comments.map((comment) =>(
                    <li key ={comment.id}>
                        <p>{comment.comment} </p>
                        <p>--{comment.author} 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
               ))
           );
                
        }
        else {
            return (
            <div></div>
            )
        }
    }
     render(){
         if(this.props.dish != null){

             
         return(
              
             <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>              
                <div className="row">  
                   
                    <div className="col-12 col-md-5  m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1" style={{ display: 'inline-block' }}>
                    
                        <h4>Comments</h4>
                            <ul class="list-unstyled">                                
                                {this.renderComments(this.props.comments)}
                            </ul>
                      
                    </div>
                </div>
             </div>
         );        
         }
         else{
             return(
                 <div></div>
             )
         }
     }

}

export default DishDetail;