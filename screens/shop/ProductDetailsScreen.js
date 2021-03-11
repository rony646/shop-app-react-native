import React from 'react';
import { useSelector } from 'react-redux'; 
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    ScrollView 
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Color';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = props => {
    
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
    );
    const dispatch = useDispatch();

    return(
        <ScrollView>
            <View>
                <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Add to cart" 
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct))
                    }} 
                    color={Colors.primary}>
                </Button>
            </View>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: '#8888',
        textAlign: 'center',
        marginVertical: 2
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 7,
        marginVertical: 30
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 0
    }
});

export default ProductDetailScreen;