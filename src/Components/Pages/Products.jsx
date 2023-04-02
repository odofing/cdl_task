import React from 'react'
import ProductDetails from './ProductDetails';


const Products = ({ productList, setQuantity }) => {

    return (
        <>


            <div className="row">
                {productList.map((product) => (

                    <ProductDetails
                        item={product}
                        key={product.item}
                        setQuantity={setQuantity}
                    />

                ))}
            </div>


        </>

    );
};

export default Products