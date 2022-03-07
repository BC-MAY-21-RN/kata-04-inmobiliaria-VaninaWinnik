/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import colors from './src/utils/colors';
import ListCards from './src/components/ListCards'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListCards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG,
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 50:0,
  },
});
export default App;
