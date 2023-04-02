import React from 'react'

const CartScreen = ({ qtys, total, emptyCart }) => {

    return (
        <>
            <h3 className='mt-5'>Cart Screen </h3>
            <div>
                {Object.entries(qtys).map((item) =>
                    item[1] > 0 ? (
                        <div key={item}>

                            <small >
                                product: ({item[0]}) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart Items: ({item[1]})
                            </small>
                        </div>
                    ) : null
                )}
                <div>
                    <h5 className='mt-3'>Total: £{total.toFixed(2)}</h5>
                    <button onClick={() => emptyCart()} className='btn btn-danger'>empty cart</button>
                </div>
            </div>
        </>
    )
}

export default CartScreen