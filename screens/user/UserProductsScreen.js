import React from 'react';

import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Color';
import * as proudctActions from '../../store/actions/products';


const UsersProductsScreen = props => {

    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id })
    };

    return(
        <FlatList 
            data={userProducts} 
            keyExtractor={item => item.id} 
            renderItem={itemData => 
                <ProductItem 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    price={itemData.item.price} 
                    onSelect={() => {}}
                >
                    <Button color={Colors.primary} title="Edit" onPress={() => {
                        editProductHandler(itemData.item.id)
                    }}/>
                    <Button color={Colors.accent} title="Delete" onPress={() => {
                        dispatch(proudctActions.deleteProduct(itemData.item.id))
                    }}/>
                </ProductItem>}
        />
    )
}

UsersProductsScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Your Products',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="menu"
                iconName="md-menu"
                onPress={() => navData.navigation.toggleDrawer()} 
            />
        </HeaderButtons>,
        headerRight:  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Add"
                            iconName="md-create"
                            onPress={() => navData.navigation.navigate('EditProduct')} 
                        />
                       </HeaderButtons>,
    }
}

export default UsersProductsScreen;