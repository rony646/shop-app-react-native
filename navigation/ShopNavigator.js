import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverViewScreen';
import Colors from '../constants/Color'; 

const ProductsNavigator = createStackNavigator({
    ProductOverviewScreen: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }
});

export default createAppContainer(ProductsNavigator);