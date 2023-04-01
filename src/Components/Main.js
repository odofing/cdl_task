import React, { useState } from 'react'
import Products from './Pages/Products'
import Data from '../data'

let allProducts = {};


Data.forEach(({ product }) => {
    allProducts[product] = 0;
});


const Main = () => {
    const [cartQty, setCartQty] = useState(allProducts);
    const productQty = (item, quantity) => {
        let newCartQty = { ...cartQty };
        newCartQty[item] += quantity;



    };

    return (
        <>
            <Products
                setQuantity={productQty}
                productList={Data}

            />
        </>
    )
}

export default Main