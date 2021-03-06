
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';


import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);

export default function App() {

  let fontLoaded = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};
