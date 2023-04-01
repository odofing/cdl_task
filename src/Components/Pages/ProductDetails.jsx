import React, { useState } from 'react'

const ProductDetails = ({ item, setQuantity, tag }) => {
    const { product, price, discount, image, id } = item;
    const [productQuantity, setProductQuantity] = useState(0);


    return (
        <>
            <div className="col-md-3 m-auto " key={id} >
                <div className='card-body' >
                    <h3>{product}</h3>
                    <img src={image} className="" alt="..." width='200px' height='200px' />
                    <p>Price: £{price}</p>
                    <>
                        {
                            discount === null ? <p className='discount'>Discount not available for this product</p>
                                : <p className='card-text'><b>Discount:</b> Buy {discount.discountQty} items

                                    for  £{discount.discountPrice}</p>
                        }
                    </>

                    <input
                        type="number"
                        className='form-control'
                        min="0"
                        onChange={(e) =>
                            setProductQuantity(
                                e.target.value > 0 ? Number(e.target.value) : 0
                            )
                        }
                    />
                    <button className='btn btn-success m-2'
                        onClick={() => setQuantity(product, productQuantity)} type='button'
                    >Add to cart</button>

                </div>
            </div>
        </>
    );
};

export default ProductDetails