import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>Select your category</h2>
            <CategoryDetail count={count}/>
        </div>
    );
};

export default Categories;