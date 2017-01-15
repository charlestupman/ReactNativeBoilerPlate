import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity, Navigator } from 'react-native';
import ViewContainer from '../components/ViewContainer/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const naps = [
  {napName: 'afternoon', time: 40 },
  {napName: 'mid morning', time: 20 },
  {napName: 'pre drinks', time: 60 }
]

export class NapsIndexScreen extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      napsDataSource: ds.cloneWithRows(naps)
    };
  };


  render() {
    return (

      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <ListView 
          style={{paddingTop: 100}}
          dataSource={this.state.napsDataSource}
          renderRow={(naps) => {return this._renderNapsRow(naps)}} />
      </ViewContainer>
    );
  }

  _renderNapsRow(naps){
    return(
      <TouchableOpacity style={styles.napsRow} onPress={(event)=> this._navigateToNapShow(naps) }>
        <Text style={styles.napsName}>{_.capitalize(naps.napName)}</Text>
        <View style={{flex:1}}/>
        <Icon name="chevron-right" style={styles.napsMoreIcon}/>
      </TouchableOpacity>
    )
  }

  _navigateToNapShow(naps){
    this.props.navigator.push({
      ident: "NapShow",
      naps,
      //sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
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
  },
  napsMoreIcon:{
    color:"green",
    height: 10,
    width: 10,
    marginRight: 25, 

  }
})

module.exports = NapsIndexScreen;