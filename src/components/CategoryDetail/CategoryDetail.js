import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const category = useContext(CategoryContext);
    const {name} = props.product;
    return (
        <div>
           <h3>This is your category Detail has</h3> 
           <h4>Selected Product: {name}</h4>
        </div>
    );
};

export default CategoryDetail;