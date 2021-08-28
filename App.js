
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
