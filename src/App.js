import React from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/product/:id' element={<Product />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
