import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import IconAndText from './IconAndText';

const ImageCards = ({ card }) => {
  return (
    <View>
      <Image style={styles.img} source={{ uri: card.image }} />
      <View style={styles.starContainer}>
        <IconAndText name="star" size={15} color="#eebc38" condition='Ionicons' />
        <Text style={styles.text}>{card.startRange}</Text>
      </View>
    </View>
  );
};

export default ImageCards;

const styles = StyleSheet.create({
  img: {
    width: 117,
    height: 117,
    borderRadius: 15,
    marginLeft: 10,
  },
  starContainer: {
    position: 'absolute',
    marginHorizontal: 40,
    marginTop: 79,
    backgroundColor: '#fbedb7',
    borderRadius: 12,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
    height: 25,
  },
  text: {
    color: '#8f7840',
    fontWeight: 'bold',
  }
});
