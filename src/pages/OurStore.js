import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";


const OurStore = () => {
  return (
    <>
    <Meta title={"Our Store"} />
    <BreadCrumb title="Our Store" />
    <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className="ps-0">
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Filter By
                        </h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className="form-check-label" htmlFor="">
                                    In Stock (1)
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className="form-check-label" htmlFor="">
                                    Out of Stock (0)
                                </label>
                            </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center gap-10">
                                <div className="form-floating">
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="From"
                                    />
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating">
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="To"
                                    />
                                    <label htmlFor="floatingInput1">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Color</h5>
                            <div>
                                <ul className="colors ps-0">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="color-1"
                                    />
                                    <label className="form-check-label" htmlFor="color-1">
                                        S (2)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="color-2"
                                    />
                                    <label className="form-check-label" htmlFor="color-2">
                                        M (2)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    HeadPhones
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Laptops
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Smart Phones
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Wireless
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Random Products</h3>
                    </div>
                </div>
                <div className="col-9">
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurStore;