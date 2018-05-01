import React from 'react';
import { SuperGridSectionList } from 'react-native-super-grid';
import { StyleSheet, Text, View } from 'react-native';
import SentenceBar from './SentenceBar';
import CardsGallery from './CardsGallery';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SentenceBar />
        <CardsGallery />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});