
import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Search from '../components/Search'
import PortTab from '../components/Port'
import portList from '../assets/PortData'

class PortScreen extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Bonjour</Text>
        <FlatList
          data={portList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <PortTab port={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

export default PortScreen