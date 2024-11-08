import React from 'react';

const CategoryDetail = (props) => {
    const {count} = props;
    return (
        <div>
           <h3>This is your category Detail has: {count}</h3> 
        </div>
    );
};

export default CategoryDetail;