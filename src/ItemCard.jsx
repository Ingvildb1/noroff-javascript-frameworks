import React from "react";

const ItemCard = ({ item: { id, title, tags, imageUrl, description, price, discountedPrice} }) => {
    return (
        <div className='item' key={id}>
        <div>
          <p>{tags}</p>
        </div>

      <div>
        <img src={imageUrl !== 'N/A' ? imageUrl : 'https://via.placeholder.com/400'} alt={title}/>
      </div>

      <div>
        <span>{tags}</span>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <h4 className="beforePrice">{price},-</h4>
        <h4>{discountedPrice},-</h4>


      </div>
     </div>
    );
}

export default ItemCard;