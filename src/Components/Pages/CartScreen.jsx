import React from 'react'

const CartScreen = ({ qtys, total }) => {
    console.log(qtys, total)
    return (
        <>
            <h1 className='mt-5'>Cart Screen </h1>
            <div>
                {Object.entries(qtys).map((item) =>
                    item[1] > 0 ? (
                        <div key={item}>

                            <small >
                                product: {item[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Price {item[1]}
                            </small>
                        </div>
                    ) : null
                )}
                <div>
                    <h5 className='mt-3'>Total: £{total.toFixed(2)}</h5>
                </div>
            </div>
        </>
    )
}

export default CartScreen