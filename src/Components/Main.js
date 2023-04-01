import React from 'react'
import Products from './Pages/Products'
import Data from '../data'

const Main = () => {
    return (
        <>
            <Products
                productList={Data}

            />
        </>
    )
}

export default Main