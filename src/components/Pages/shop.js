import React from "react"


import { Link } from "react-router-dom";

function Shop(props) {
    console.log("Props from Shop: ", props);
    return (
        <div className="items-list-wrapper">
            {props.items.map((item) => (
                <div className='store-items' key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.imageUrl} alt={item.name} />
                        <p>{item.name}</p>
                    </Link>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Shop;
