import React, { useReducer, useCallback } from 'react';

import { 
    ScrollView, 
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Text,
    Button
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Color';
import * as authActions from '../../store/actions/auth';


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  };

const AuthScreen = props => {

    const dispatch = useDispatch();

    const signUpHandler = () => {
        dispatch(authActions.signup(
            formState.inputValues.email, 
            formState.inputValues.password
        ));
    }

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: ''
        },
        inputValidities: {
          email: false,
          password: false
        },
        formIsValid: false
      });

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
          type: FORM_INPUT_UPDATE,
          value: inputValue,
          isValid: inputValidity,
          input: inputIdentifier
        });
      }, [dispatchFormState])

      console.log(formState)

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
                        errorText="Please enter a valid email address"
                        onInputChange={inputChangeHandler}
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
                        errorText="Please enter a valid password"
                        onInputChange={inputChangeHandler}
                        initialValue=""
                    />

                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Login" 
                            color={Colors.primary} 
                            onPress={signUpHandler}
                        />
                     </View>

                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Switch to Sign Up" 
                            color={Colors.accent} 
                            onPress={signUpHandler}
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