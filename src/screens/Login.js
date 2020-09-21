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

export const Login = ({navigation}) => {
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
          <Text style={styles.logoHeading}>
            Episodic series of digital audio.
          </Text>
        </View>
        <View style={styles.TextInputFields}>
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
            onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.submitText]}>Login</Text>
          </TouchableHighlight>
          <View style={styles.ForgetPassword}>
            <Text
              style={{color: 'white'}}
              onPress={() => navigation.navigate('Register')}>
              Don't have an account? Signup
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
