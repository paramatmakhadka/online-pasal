import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Frontend from '../../layout/Frontend';
import { CartContext } from './CartContext';

function Product() {
    let { state, dispatch } = useContext(CartContext)
    let [data, setData] = useState(null);
    let { pid } = useParams()
    useEffect(() => {
        async function getData() {
            let res = await fetch(`https://dummyjson.com/products/${pid}`);
            let productData = await res.json();
            setData(productData);
        }
        getData();
    }, [pid]);


    if (!data) {
        return <h2 className="text-center mt-10 text-xl">Product not found</h2>;
    }
    return (
        <>
            <Frontend>
                <section className="py-4">
                    <div className="container">
                        <h2 className='text-center mb-4'>{data.title}</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="p-3 rounded-4 shadow-lg">
                                    <img
                                        src={data.images[0]}
                                        alt={data.title}
                                        className="w-100"
                                    />
                                    <p className='fw-bold'>${data.price}</p>
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>
                                    <button className="btn btn-primary btn-lg" onClick={() => dispatch({ type: 'addtocart', payload: data })}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Frontend>
        </>
    )
}

export default Product