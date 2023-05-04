import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">May 4th 2023</p>
                    <h5 className="title">Amazon Lays Off 9000 Employees</h5>
                    <p className="desc">
                        The decision of a company to lay off 9,000 employees is a significant 
                        and challenging event. Such a move can result from various factors, 
                        including economic downturns, technological changes, 
                        or restructuring plans...
                    </p>
                    <Link to="/" className="button">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default BlogCard;