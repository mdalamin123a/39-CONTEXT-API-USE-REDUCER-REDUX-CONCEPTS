import React, {useContext, useEffect, useState} from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';
const allProducts = [
    {name: 'Lenovo', category: 'laptop'},
    {name:'Asus', category: 'laptop'},
    {name:'Dell', category: 'laptop'},
    {name:'Samsung', category: 'mobile'},
    {name:'Nokia', category: 'mobile'},
    {name:'Apple', category: 'mobile'},
    {name:'Cannon', category: 'camera'},
    {name:'Nikkon', category: 'camera'},
    {name:'Sony', category: 'camera'},
]

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [category] = useContext(CategoryContext);
    useEffect(()=>{
        const matchedProducts = allProducts.filter(product => {
            return product.category == category.toLowerCase();
        });
        setProducts(matchedProducts);
    }, [category]);
    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;