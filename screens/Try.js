import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, Image, View } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Header transparent />
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200, flex: 1 }}>
                    <Row><Text style={styles.label}>Nom :</Text></Row>
                    <Row><Text style={styles.label}>Prénom :</Text></Row>
                    <Row><Text style={styles.label}>Email :</Text></Row>
                    <Row><Text style={styles.label}>Téléphone :</Text></Row>
                    <Row><Text style={styles.label}>Adresse :</Text></Row>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200, flex: 2 }}>
                    <Row><TextInput style={styles.input} placeholder={"hello world"}/></Row>
                    <Row><TextInput style={styles.input} placeholder={"hello world"}/></Row>
                    <Row><TextInput style={styles.input} placeholder={"hello world"}/></Row>
                    <Row><TextInput style={styles.input} placeholder={"hello world"}/></Row>
                    <Row><TextInput style={styles.input} placeholder={"hello world"}/></Row>
            </Col>
          </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    //slefAlign: "center",
    backgroundColor: "rgb(222, 222, 222)",
    borderColor: "rgb(238, 92, 4)",
    height: 40
  },
  label: {
    fontSize: 20,
    fontFamily: 'Arial'
  }
})