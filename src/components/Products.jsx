import React from 'react';
import { productData } from '../data';

const Products = () => {
	console.log(productData);
	return (
		<div>
			<section id='page-header'>
				<h2>Products</h2>
				<p>Save more with coupons & up to 70% off!</p>
			</section>

			<section id='product1' className='section-p1'>
				{productData.map((product, index) => (
					<div className='pro-container'>
						<div
							className='pro'
							onclick="window.location.href = 'sproduct.html'">
							<img src='img/products/f1.jpg' alt='' />
							<div className='des'>
								<span>adidas</span>
								<h5>{product.name}</h5>
								<div className='star'>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</div>
								<h4>$78</h4>
							</div>
							<a href='#'>
								<i className='fa-solid fa-cart-shopping '></i>
							</a>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Products;
