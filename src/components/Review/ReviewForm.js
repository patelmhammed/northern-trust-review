import { React, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewForm = () => {
	const [stars, setStars] = useState(0);
	const data = {
		review: ' ',
		starsCount: stars,
	};

	const submitHandler = (data) => {
		console.log(data);
		// Write API to Upload Review
		/* updating title of product with id 1 */
		// fetch('https://dummyjson.com/products/1', {
		// 	method: 'PUT' /* or PATCH */,
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		title: 'iPhone Galaxy +1',
		// 	}),
		// })
		// 	.then((res) => res.json())
		// 	.then(console.log);
		console.log('API CAll');
	};

	return (
		<>
			<form
				className='review'
				onSubmit={(e) => {
					e.preventDefault();
					submitHandler(data);
				}}>
				{/* Star Selection */}
				<StarRatingComponent
					name='reviewRating'
					starCount={5}
					// value={2}
					onStarClick={(value) => {
						setStars(value);
					}}
				/>
				<input placeholder='Write YOur Review' />
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default ReviewForm;
