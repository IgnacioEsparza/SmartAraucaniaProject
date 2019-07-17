import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, View } from 'react-native';
import Navegador from './Navegador';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    }
  }

  componentDidMount() {
    this.getUserRandom();
  }

  getUserRandom = () => {
    const url = 'https://randomuser.me/api/?seed=1&page=1&results=20';

    this.setState({ loading: true })

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.result,
          loading: false,
        });
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navegador></Navegador>
      </View>
    );
  }
}
