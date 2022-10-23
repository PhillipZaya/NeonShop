import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    },);
    return (
        <div>
            {/* NeonShop banner */}
            <div class="boxx">
            <span></span>
            <h2>NeonShop</h2>
            </div>
            <div className="featured-products-container container mt-4">
                <h2 className="home">Last products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div class="boxx">
            <span></span>
            <h2>20% Sale</h2>
            </div>
            {/* Categories */}
            <div className="recent-products-container container mt-4">
                <h2 className="home">Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={6}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
                {/* footer */}
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#1">about us</a></li>
  	 				<li><a href="#2">our services</a></li>
  	 				<li><a href="#3">privacy policy</a></li>
  	 				<li><a href="#4">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#5">FAQ</a></li>
  	 				<li><a href="#6">shipping</a></li>
  	 				<li><a href="#7">returns</a></li>
  	 				<li><a href="#8">order status</a></li>
  	 				<li><a href="#9">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#10">watch</a></li>
  	 				<li><a href="#11">bag</a></li>
  	 				<li><a href="#12">shoes</a></li>
  	 				<li><a href="#13">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#14"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#15"><i class="fab fa-twitter"></i></a>
  	 				<a href="#16"><i class="fab fa-instagram"></i></a>
  	 				<a href="#17"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
}

export default Home;