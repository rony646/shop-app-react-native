import React from 'react';

import { 
    ScrollView, 
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Text,
    Button
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Color'

const AuthScreen = props => {
    return(
        <KeyboardAvoidingView 
            behavior="padding"
            keyboardVerticalOffset={30}
            style={styles.screen}
        >
            <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
            <Card style={styles.authContainer}>
                <ScrollView>

                    <Input 
                        id="email" 
                        label="E-Mail" 
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorMessage="Please enter a valid email address"
                        onInputChange={() => {}}
                        initialValue=""
                    />

                    <Input 
                        id="password" 
                        label="Password" 
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorMessage="Please enter a valid password"
                        onInputChange={() => {}}
                        initialValue=""
                    />

                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Login" 
                            color={Colors.primary} 
                            onPress={() => {}}
                        />
                     </View>

                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Switch to Sign Up" 
                            color={Colors.accent} 
                            onPress={() => {}}
                        />
                    </View>
                </ScrollView>

            </Card>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    authContainer: {
        width: '80%',
        maxWidth:  400,
        maxHeight: '50%',
        maxHeight: 400,
        padding: 20
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20
    }
});

export default AuthScreen;