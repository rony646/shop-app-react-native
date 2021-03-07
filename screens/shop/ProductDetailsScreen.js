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

const ProductDetailScreen = props => {
    
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
    );

    return(
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;