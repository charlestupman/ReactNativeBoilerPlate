import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

export class NapsShowScreen extends Component {
  render() {
    var napBackgroundColor
    switch(this.props.naps.time){
      case 40: napBackgroundColor = 'blue'
        break
      case 20: napBackgroundColor = 'red'
        break 
      case 60: napBackgroundColor = 'dodgerblue'
        break
    }
    return (

      <ViewContainer style={{backgroundColor: napBackgroundColor}}>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <Text style={{marginTop: 100, fontSize: 20}}> {'PERSON SHOW SCREEN'}</Text>
        <Text style={styles.napsName}>{_.capitalize(this.props.naps.napName)}</Text>
        <View style={{flex:1}}/>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  napsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50
  },
  napsName:{
    marginLeft: 25
  }
})

module.exports = NapsShowScreen;