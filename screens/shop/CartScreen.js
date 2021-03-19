import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Color';
import CartItem from '../../components/shop/CartItem';
 
const CartScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => state.cart.items);
    const transformedCartItems = [];
    for(const key in cartItems) {
        transformedCartItems.push({
            productId: key,
            productTitle: cartItems[key].productTitle,
            productPrice: cartItems[key].productPrice,
            quantity: cartItems[key].quantity,
            sum: cartItems[key].sum
        })
    };

    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button 
                    color={Colors.accent} 
                    title="Order Now" 
                    disabled={Object.keys(cartItems).length === 0}>
                </Button>
            </View>
           <FlatList 
            data={transformedCartItems} 
            keyExtractor={item => item.productId}
            renderItem={
                itemData => 
                <CartItem 
                    quantity={itemData.item.quantity} 
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemove={() => {}}/>}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
});

export default CartScreen;