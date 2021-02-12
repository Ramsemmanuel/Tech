import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    useLocation, useHistory
  } from "react-router-dom";


class Category extends Component {
    // the query string for you.
    getCategory() {
        return sessionStorage['category']
    }

    render() {
        let query = this.getCategory();

        return (
            <div className="condiv">
            <h1 className="subtopic">Category Details Page</h1>
            <h3>Selected Item</h3>
            <br></br>
            <p>{query}</p>
            
            </div>
            )
        }
}

export default Category
    