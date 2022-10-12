import React from 'react';
import ReviewForm from '../Review/ReviewForm';

const Product = () => {
	return (
		<div>
			<section id='prodetails' className='section-p1'>
				<div className='single-pro-image'>
					<img src='img/products/f1.jpg' width='100%' id='MainImg' alt='' />

					<div className='small-image-group'>
						<div className='small-img-col'>
							<img
								src='img/products/f1.jpg'
								width='100%'
								className='small-img'
								alt=''
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='img/products/f2.jpg'
								width='100%'
								className='small-img'
								alt=''
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='img/products/f3.jpg'
								width='100%'
								className='small-img'
								alt=''
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='img/products/f4.jpg'
								width='100%'
								className='small-img'
								alt=''
							/>
						</div>
					</div>
				</div>

				<div className='single-pro-details'>
					<h6>Home/ T-shirt</h6>
					<h4>Men's Fashion T Shirt</h4>
					<h2>$139.00</h2>
					<select name='' id=''>
						<option value=''>Select Size</option>
						<option value=''>XL</option>
						<option value=''>XXL</option>
						<option value=''>Small</option>
						<option value=''>Large</option>
					</select>
					<input type='number' value='1' />
					<button className='normal'>Add to cart</button>
					<h4>Product Details</h4>
					<p>The Glidan Ultran Cotton T-Shirt.</p>
					<div className='review'>
						<ReviewForm />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Product;
