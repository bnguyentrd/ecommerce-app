import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
          <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/applewatch-1.png" className="img-fluid" alt="product image" />
          <img src="images/applewatch-2.jfif" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">
            Apple
          </h6>
          <h5 className="product-title">
            Apple watch SE 2nd Generation(GPS) 44mm Aluminum Case with Starlight Sport Band -S/M -Starlight
          </h5>
          <ReactStars 
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            $100.00
          </p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
            <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
            <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
            <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;