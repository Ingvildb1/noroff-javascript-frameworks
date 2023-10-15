import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ItemCard from "../../ItemCard";
import './../../App.css';

const url = 'https://api.noroff.dev/api/v1/online-shop';

export const Product = ({ item }) => (
  <div className="container">
    <div className="item">
      <Link to={`/${item.id}`}>
        <img src={item.imageUrl !== 'N/A' ? item.imageUrl : 'https://via.placeholder.com/400'} alt={item.title}/>
      </Link>
      <div>
        <Link to={`/${item.id}`}>
          <span>{item.tags}</span>
          <h3>{item.title}</h3>
        </Link>
        <h3>{item.description}</h3>
        <h3>{item.price}</h3>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Products to shop</h2>
      <input className="search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        placeholder="Search products"
      />
      <div className="container">
        {filteredProducts.map((item) => (
          <Link key={item.id} to={`/${item.id}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;



