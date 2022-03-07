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
      <View style={styles.starContainer}>
        <IconAndText name="star" size={24} color="yellow" description={card.startRange} condition='Ionicons'/>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{card.name}</Text>
        <BodyDetails card={card} />
        <Text style={styles.title}>{card.rentCost}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    marginVertical: 15,
  },
  title: {
    fontSize: 39,
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    position: 'absolute',
    marginHorizontal: 50,
    marginTop: 70,
    backgroundColor: 'white',
    borderRadius: 5,
  }
});
