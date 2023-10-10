import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { CartContext } from "../../App";

const url ='https://api.noroff.dev/api/v1/online-shop';

const SingleProduct = () => {
    const params = useParams()
    const { setCart } = useContext(CartContext)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`${url}/${params.id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })
    }, [params.id]) // Include params.id in the dependency array to fetch data when the ID changes

    if (product === null) return <h1>Loading...</h1>
   
    return (
        <div className="singleProduct">
            <h2>Single Product page</h2>
            <h3 className="title">Title: {product.title}</h3>
            <img src={product.imageUrl} alt={product.title} /> {/* Display the image */}
            <h4>Before: {product.price},-</h4>
            <h3>Now: {product.discountedPrice},-</h3>
            <p>{product.description}</p>
            <button onClick={() => {
                console.log("Add to cart clicked");
                setCart(prevCart => ([...prevCart, product]))
            }}>Add to cart</button>
            
        </div>
    )
}

export default SingleProduct;
