import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';3
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Color';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', 
        {
            productId: id,
            productTitle: title
        })
    }

    return <FlatList 
                data={products} 
                keyExtractor={item => item.id} 
                renderItem={itemData => 
                    <ProductItem 
                        image={itemData.item.imageUrl} 
                        title={itemData.item.title} 
                        price={itemData.item.price} 
                        onSelect={() => selectItemHandler(itemData.item.id, itemData.item.title)}
                        // onAddToCart={() => {
                        //     dispatch(cartActions.addToCart(itemData.item))
                        // }}
                    >
                        <Button color={Colors.primary} title="View Details" onPress={() => selectItemHandler(itemData.item.id, itemData.item.title)}/>
                        <Button color={Colors.accent} title="To Cart" onPress={() => dispatch(cartActions.addToCart(itemData.item))}/>
                    </ProductItem>
                    }
            />
};

ProductOverviewScreen.navigationOptions = navData => {
    return{
        headerTitle: 'All Products',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="menu"
                            iconName="md-menu"
                            onPress={() => navData.navigation.toggleDrawer()} 
                        />
                    </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title="Cart" 
                            iconName="md-cart" 
                            onPress={() => {
                                console.log(navData.navigation.navigate('Cart'))
                            }}/>
                    </HeaderButtons>
    }
}

export default ProductOverviewScreen;