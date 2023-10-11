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
            <h2>SHOP</h2>
            <h3 className="title">{product.title}</h3>
            <img src={product.imageUrl} alt={product.title} />
            <h4>Before: {product.price},-</h4>
            <h3>Now: {product.discountedPrice},-</h3>
            <p>{product.description}</p>
            <button onClick={() => {
                console.log("Add to cart clicked");
                setCart(prevCart => ([...prevCart, product]))
            }}>Add to cart</button>

            <h3>Reviews:</h3>
            {product.reviews.length === 0 ? (
                <p>No reviews yet</p>
            ) : (
                <ul>
                    {product.reviews.map((review) => (
                        <li key={review.id}>
                            <p>Username: {review.username}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Description: {review.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SingleProduct;


