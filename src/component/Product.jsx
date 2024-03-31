import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    function cardItem(item) {
        return (
            <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" , height:"30rem" }}>
                <img src={item.img} class="card-img-top" alt={item.title} style={{ width: "17rem" , height:"20rem" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product;
