import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.conatainer}>
      <Text style={styles.logo}>OLX</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: '#0004FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '700',
  },
});
