import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, TabBarIOS } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Napper extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: "NapsIndex"
    };
  }
 render(){
  return(
    <TabBarIOS
      selectedTab={this.state.selectedTab}
    >

      <Icon.TabBarItemIOS
        selected = {this.state.selectedTab === 'NapsIndex'}
        title={'Tab 1'}
        onPress={() => this.setState({selectedTab: 'NapsIndex'})}
        iconName="user"
        >
        <AppNavigator
          initialRoute ={{ident: 'NapsIndex'}}/>
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
        selected = {this.state.selectedTab === 'NapsShow'}
        title={'Tab 2'}
        onPress={() => this.setState({selectedTab: 'NapsShow'})}
        >
        <AppNavigator
          initialRoute ={{ident: 'NapShow', 
            naps:  {napName: 'pre drinks', time: 60 }}}/>
      </Icon.TabBarItemIOS>

    </TabBarIOS>
    )
 }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('Napper', () => Napper);
