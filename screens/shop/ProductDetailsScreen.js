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

import Colors from '../../constants/Color';

const ProductDetailScreen = props => {
    
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
    );

    return(
        <ScrollView>
            <View>
                <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Add to cart" onPress={() => {}} color={Colors.primary}></Button>
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
        fontSize: 24,
        color: '#8888',
        textAlign: 'center',
        marginVertical: 2
    },
    description: {
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