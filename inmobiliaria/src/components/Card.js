import { StyleSheet, View, Text } from 'react-native'
import colors from '../utils/colors'
import React from 'react'
import BodyDetails from './BodyDetails'
import ImageCards from './ImageCards'
import IconAndText from './IconAndText'

const Card = ({ card }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageCards card={card} />
      <View style={styles.container}>
        <Text style={styles.text}>{card.name}</Text>
        <BodyDetails card={card} />
        <Text style={styles.text}>{card.rentCost}</Text>
        <View style={styles.heartContainer}>
          <IconAndText name="heart-circle" size={38} color="#47b074" condition='Ionicons' />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5fdff',
    borderRadius: 17,
    margin: 10,
  },
  heartContainer: {
    position: 'absolute',
    right: -15,
    bottom: -8,
  }
});
