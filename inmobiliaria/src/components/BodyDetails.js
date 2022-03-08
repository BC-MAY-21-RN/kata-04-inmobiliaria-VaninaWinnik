import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import IconAndText from './IconAndText'

const BodyDetails = ({ card }) => {
  return (
    <View style={styles.containerDetails}>
      <View style={styles.containerLocation}>
        <IconAndText name="location-outline" size={20} color="black" condition="Ionicons" />
        <Text style={styles.address}>{card.address}</Text>
      </View>
      <View style={styles.container}>
        <IconAndText name="ios-bed-outline" size={24} color="gray" description={card.rooms} condition="Ionicons" />
        <IconAndText name="bath" size={20} color="gray" description={card.bathroom} condition="FontAwesome5" />
        <IconAndText name="ruler-combined" size={15} color="gray" description={card.surface} condition="FontAwesome5" />
      </View>
    </View>
  );
};

export default BodyDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDetails: {
    marginVertical: 8,
  },
  address: {
    color: 'gray',
  },
  containerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
