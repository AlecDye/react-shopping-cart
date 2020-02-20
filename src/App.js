import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext'

// import { data } from './data'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// // ? Might need to adjust logic. cart & setCart?
	const addItem = item => {
		// add the given item to the cart
		// // props.addItem(item)
		setCart = ([...cart, item])
	};

	//? passing cart (state) into Provider
	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }} >
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				// <Products
				// 	products={products}
				// 	addItem={addItem}
				// />
				/>

				<Route
					path="/cart"
					component={ShoppingCart}
				// render={() => <ShoppingCart cart={cart} />}
				/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
