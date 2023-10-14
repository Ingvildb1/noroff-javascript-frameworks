import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { CartContext } from "../../App";
import './../../App.css';

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
    }, [params.id])

    if (product === null) return <h1>Loading...</h1>

    // Calculate the discount amount
    const discountAmount = product.price - product.discountedPrice;

    return (
        <div className="singleProduct">
            <h2>SHOP</h2>
            <h3 className="title">{product.title}</h3>
            <img src={product.imageUrl} alt={product.title} />
            <p className="description">{product.description}</p>
            <h4>Before: ${product.price},-</h4>
            <h3>Now: ${product.discountedPrice},-</h3>
            {discountAmount > 0 && <p className="discountBadge">Discount: ${discountAmount.toFixed(2)}!</p>}
            <button onClick={() => {
                console.log("Add to cart clicked");
                setCart(prevCart => ([...prevCart, product]))
            }}>Add to cart</button>

            <h3>Reviews:</h3>
            {product.reviews.length === 0 ? (
                <p>No reviews yet</p>
            ) : (
                <ul className="reviews">
                    {product.reviews.map((review) => (
                        <li key={review.id} className="review-item">
                            <p>Username: {review.username}</p>
                            <p className="review-rating">Rating: {review.rating}</p>
                            <p>Description: {review.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SingleProduct;



