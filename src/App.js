import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext'

import { data } from './data'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//? Logic to place item into cart
	const addItem = item => {
		// add the given item to the cart
		props.addItem(item)
	};

	//? passing cart (state) into Provider
	return (
		<div className="App">
			<ProductContext.Provider value={cart} >
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
