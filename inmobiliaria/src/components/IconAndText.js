import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const IconAndText = ( icon ) => {
  return (
    <View style={styles.container}>
      {icon.condition == 'FontAwesome5' ? <FontAwesome5 name={icon.name} size={icon.size} color={icon.color} /> : <Ionicons name={icon.name} size={icon.size} color={icon.color} />}
      <Text style={styles.description}>{icon.description}</Text>
    </View>
  );
};

export default IconAndText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 17,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
