import React from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import styles from '../../style.js';

export const Register = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Image
          style={{width: '100%'}}
          source={require('../../assets/images/login_background.png')}
        />
        <View style={styles.rectangle}></View>
        <View style={styles.backgroundOverlay}>
          <Image
            style={styles.backgroundOverlay}
            source={require('../../assets/images/background_lines.png')}
          />
        </View>
        <View style={styles.logoPlacementMain}>
          <Image
            style={styles.logoPlacement}
            source={require('../../assets/images/logo.png')}
          />
          <Image
            style={styles.logoPlacementName}
            source={require('../../assets/images/logo_name_pcast.png')}
          />
        </View>
        <View style={styles.logoHeadingMain}>
          <Text style={styles.logoHeading}>Register to pcast</Text>
        </View>
        <View style={styles.TextInputFields}>
          <View style={styles.emailIcon}>
            <TextInput
              style={(styles.email, styles.LoginFields)}
              placeholder="Full Name"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.emailIcon}>
            <TextInput
              style={(styles.email, styles.LoginFields)}
              placeholder="Email Address"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.passwordIcon}>
            <TextInput
              style={(styles.password, styles.LoginFields)}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
            />
          </View>
          {/* Button With Custom Colors and Shadow */}
          <TouchableHighlight
            style={styles.submit}
            onPress={() =>
              Alert.alert(
                'Simple Button pressed',
                'You pressed the submit button',
              )
            }>
            <Text style={[styles.submitText]}>Signup</Text>
          </TouchableHighlight>
          <View style={styles.ForgetPassword}>
            <Text
              style={{color: 'white'}}
              onPress={() => navigation.navigate('Login')}>
              Already Have an account? Login
            </Text>
          </View>
          <View style={styles.ForgetPassword}>
            <Text style={{color: 'white'}}>Forget Password?</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
