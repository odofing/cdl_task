import React, { useState } from 'react'
import Products from './Pages/Products'
import Data from '../data'
import CartScreen from './Pages/CartScreen';

let allProducts = {};


Data.forEach(({ product }) => {
    allProducts[product] = 0;

});


const Main = () => {
    const [cartQty, setCartQty] = useState(allProducts);
    const [total, updateTotal] = useState((0));
    const productQty = (item, quantity) => {
        let newCartQty = { ...cartQty };
        newCartQty[item] += quantity;
        updateTotal(totalInCart(Data, newCartQty));
        setCartQty(newCartQty);
    }
    const totalInCart = (productList, quantities) => {

        let total = 0;

        productList.forEach(({ product, price, discount }) => {
            //  console.log(product, price)
            if (quantities[product] === 0) return;
            if (discount) {

                const { discountQty, discountPrice } = discount;

                let h = quantities[product] / discountQty;
                let r = quantities[product] % discountQty;

                total += Math.floor(h) * discountPrice + r * price;
                return;
            }

            total += quantities[product] * price;

        });

        return total;
    };


    return (
        <>
            <Products
                setQuantity={productQty}
                productList={Data}
            />
            <CartScreen
                quantities={setCartQty}
                total={total}

            />
        </>
    )
}

export default Main