import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    console.log(setCategory);
    return (
        <div>
            <h1>This is Shipment</h1>
            <button onClick={()=>setCategory(category + 1)}>Increment from Category</button>
        </div>
    );
}

export default Shipment;