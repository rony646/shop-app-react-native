import React from 'react';

import { createStackNavigator, createDrawerNavigator , createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductsOverviewScreen from '../screens/shop/ProductsOverViewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';

import Colors from '../constants/Color'; 

const navigationOptions =  {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    }
}

const ProductsNavigator = createStackNavigator({
    ProductOverviewScreen: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerCofing => <Ionicons name="md-cart" size={23} color={drawerCofing.tintColor}/>
    },
    defaultNavigationOptions: navigationOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerCofing => <Ionicons name="md-list" size={23} color={drawerCofing.tintColor}/>
    },
    defaultNavigationOptions: navigationOptions
})

const AdminNavigator = createStackNavigator({
   UserProducts: UserProductsScreen
}, {
    navigationOptions: {
        drawerIcon: drawerCofing => <Ionicons name="md-create" size={23} color={drawerCofing.tintColor}/>
    },
    defaultNavigationOptions: navigationOptions
})

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
    }
});

export default createAppContainer(ShopNavigator);