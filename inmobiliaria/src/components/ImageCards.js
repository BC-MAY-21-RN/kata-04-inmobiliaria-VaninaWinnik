import { StyleSheet, View, Image } from 'react-native'
import colors from '../utils/colors'
import React from 'react'

const ImageCards = ({ card }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: card.image}} />
    </View>
  );
};

export default ImageCards;

const styles = StyleSheet.create({
  img: {
    width: 115,
    height: 115,
  },
});
