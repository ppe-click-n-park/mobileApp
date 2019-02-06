
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Port extends React.Component {
  render() {
    const port = this.props.port 
    return (
      <View style={styles.port_container}>
        <Text numberOfLines={1}>{port.name} - {port.city}</Text>
        <Text>{port.phone}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  port_container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'rgba(115, 157, 244, 0.8)',
    textAlign: 'center'
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Port