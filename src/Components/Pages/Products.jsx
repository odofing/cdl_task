import React from 'react'
import ProductDetails from './ProductDetails';


const Products = ({ productList, setQuantity }) => {

    return (
        <>
            <h1 className='mt-5'>CDL project</h1>

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