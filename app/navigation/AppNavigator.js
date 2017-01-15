import React, { Component } from 'react';
import { Navigator, StyleSheet, Text} from 'react-native';
import NapsIndexScreen from '../screens/NapsIndexScreen';
import NapsShowScreen from '../screens/NapsShowScreen';

export class AppNavigator extends Component {

  _renderScene(route, navigator){
    var globalNavigatorProps = {
      navigator
    }
    switch(route.ident){
      case "NapsIndex":
      return(
          <NapsIndexScreen
            {...globalNavigatorProps} />
        )
      case "NapShow":
      return(
        <NapsShowScreen
          {...globalNavigatorProps}
          naps={route.naps} />
        )

      default:
        return(
          <Text>{'Yo you messed this up ${route}'}</Text>
          )
    }
  }

 render(){
  return(
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
        />
    )
 }
}

const styles = StyleSheet.create({
  navigatorStyles:{

  }
})

module.exports = AppNavigator