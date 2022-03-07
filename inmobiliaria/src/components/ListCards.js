import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import inmobiliariaCards from '../utils/inmobiliaria_cards'
import Card from './Card'

const ListCards = () => {
  return (
    <View>
      <FlatList
        data={inmobiliariaCards}
        renderItem={({item}) => <Card card={item} />}
        keyExtractor={card => card.id}
      />
    </View>
  )
}

export default ListCards

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10
  }
})
