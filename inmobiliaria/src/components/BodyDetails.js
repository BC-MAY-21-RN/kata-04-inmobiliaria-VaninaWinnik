import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import IconAndText from './IconAndText'

const BodyDetails = ({ card }) => {
  return (
    <View>
      <IconAndText name="location-outline" size={24} color="black" description={card.address} condition="Ionicons" />
      <View style={styles.container}>
        <IconAndText name="ios-bed-outline" size={24} color="gray" description={card.rooms} condition="Ionicons" />
        <IconAndText name="bath" size={24} color="gray" description={card.bathroom} condition="FontAwesome5" />
        <IconAndText name="ruler-combined" size={15} color="gray" description={card.surface} condition="FontAwesome5" />
      </View>
    </View>
  );
};

export default BodyDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
