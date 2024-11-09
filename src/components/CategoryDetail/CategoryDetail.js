import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const category = useContext(CategoryContext);
    console.log(category);
    return (
        <div>
           <h3>This is your category Detail has</h3> 
           <h4>Selected Category: {category[0]}</h4>
        </div>
    );
};

export default CategoryDetail;