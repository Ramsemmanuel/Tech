import React, { Component } from 'react';



class Home extends Component {
    handleClick(e){
        sessionStorage['category'] =  e;
        window.location = '/details'
    }
    render() {
        return (
            <div className="condiv home">
                <h3>Select Category</h3>
                <ul className="category">
                      <li className="item" onClick={()=>this.handleClick('Category 1')}>  Category 1</li>
                      <li className="item" onClick={()=>this.handleClick('Category 2')}>  Category 2</li>
                      <li className="item" onClick={()=>this.handleClick('Category 3')}>  Category 3</li>
                      <li className="item" onClick={()=>this.handleClick('Category 4')}>  Category 4</li>
                      <li className="item" onClick={()=>this.handleClick('Category 5')}>  Category 5</li>  
                </ul>
            </div>
            )
        }
    }
    
    export default Home
    