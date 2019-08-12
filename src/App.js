import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import ProductList from './containers/ProductsList';
import Filters from './containers/Filters';
import Drawer from './components/UI/Drawer/Drawer';

import './App.css';

const store = configureStore();

function App() {
    return ( 
        <Provider store={store}>
            <div className="container">
                <Filters />
                <ProductList />
            </div>
            <Drawer />
        </Provider>
    );
}

export default App;