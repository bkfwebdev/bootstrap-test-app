import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

class MyDropDown extends Component {
    constructor(props){
        super(props);
        this.state =  [
            {
              "id": 1,
              "name": "Class 1",
              "product_types": [
                {
                  "id": 1,
                  "name": "Product 1-1",
                  "categories": [
                    {
                      "id": 1,
                      "name": "Category 1-1-1"
                    },
                    {
                      "id": 8,
                      "name": "Category 1-1-2"
                    },
                    {
                      "id": 15,
                      "name": "Category 1-1-3"
                    }
                  ]
                },
                {
                  "id": 2,
                  "name": "Product 1-2",
                  "categories": [
                    {
                      "id": 2,
                      "name": "Category 1-2-1"
                    },
                    {
                      "id": 9,
                      "name": "Category 1-2-2"
                    }
                  ]
                },
                {
                  "id": 3,
                  "name": "Product 1-3",
                  "categories": [
                    {
                      "id": 3,
                      "name": "Category 1-3-1"
                    },
                    {
                      "id": 10,
                      "name": "Category 1-3-2"
                    },
                    {
                      "id": 17,
                      "name": "Category 1-3-3"
                    }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "name": "Class 2",
              "product_types": [
                {
                  "id": 8,
                  "name": "Product 2-1",
                  "categories": [
                    {
                      "id": 22,
                      "name": "Category 2-1-1"
                    },
                    {
                      "id": 26,
                      "name": "Category 2-1-2"
                    },
                    {
                      "id": 30,
                      "name": "Category 2-1-3"
                    }
                  ]
                },
                {
                  "id": 9,
                  "name": "Product 2-2",
                  "categories": [
                    {
                      "id": 23,
                      "name": "Category 2-2-1"
                    },
                    {
                      "id": 27,
                      "name": "Category 2-2-2"
                    },
                    {
                      "id": 31,
                      "name": "Category 2-2-3"
                    }
                  ]
                }
              ]
            }
          ]
          ;
    }

handleClassClick(){
    { /* add cascade of class1 and class2 for dropdown */ }
    alert("class was clicked");
}
handleTypeClick(){
    { /* add cascade of product based on class */ }
    alert("type was clicked");

}
handleCategoryClick(){
    {/* add cascade of category based on product */}
    alert("category was clicked");
}


	render() {
		return (
			<DropdownButton id="dropdown-basic-button" title="Product Selector Menu">
				<Dropdown.Item href="#/action-1" onClick={(e)=>this.handleClassClick}>Class</Dropdown.Item>
                {/* on click add a side dropdown with class1 and class2*/}
				<Dropdown.Item href="#/action-2" onClick={(e)=>this.handleTypeClick}>Product</Dropdown.Item>
                {/* on click add a side dropdown with products based on class */}
				<Dropdown.Item href="#/action-3" onClick={(e)=>this.handleCategoryClick}>Category</Dropdown.Item>
                {/* on click add a side dropdown with category based on class and product */}
			</DropdownButton> 
		)
	}
}

export default MyDropDown;