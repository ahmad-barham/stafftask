import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
  TextInput,
} from 'react-native';
import {Button,Text} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from './actions';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailvisible, setemailvisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  const login =  async () => {

    if (email != '' && password != '') {
      setShowLoading(true);
      try {

     await  dispatch(loginUser(email, password));
      setShowLoading(false);
    }catch (e) {
        setShowLoading(false);
      }
    }
  };






  useEffect(() => {
    //   setLoad(loading);
    setShowLoading(loading);

    if (user) {
      navigation.navigate('Home');
    }
  }, [loading]);


  const emailChange = (data) => {
    setEmail(data);
(data!='')?  setemailvisible(true):setemailvisible(false);
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
        source={require('./assest/email.png')}
      />

      <View style={styles.formContainer}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              height: 50,
            }}>
            Your email address
          </Text>
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            value={email}
            onChangeText={emailChange}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {emailvisible ? (
          <View style={styles.subContainerButt}>
            <Button
              buttonStyle={styles.btnActive}
              title="Login"
              onPress={() => {
                login();
              }}
            />
          </View>
        ) : null}
        <View style={styles.subContainerButt}></View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text  style={styles.textInput}>
            {error}
          </Text>
        </View>
        <View style={styles.subContainerButt}>
          <Button
            buttonStyle={styles.btnActive}
            title="Register"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </View>
        {showLoading && (
          <View style={styles.activity}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </View>
  );
}

Login.navigationOptions = ({navigation}) => ({
  title: 'Login',
  headerShown: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: 400,
    padding: 20,
  },
  subContainer: {
    marginBottom: 20,
    padding: 5,
  },
  subContainerButt: {
    backgroundColor: '#000',
    marginBottom: 5,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    width: 200,
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
});

export default Login;
