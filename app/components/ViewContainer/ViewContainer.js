'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles';

class ViewContainer extends Component {
	render() {
		return (
			<View style={[styles.viewContainer, this.props.style || {} ]}>
			{this.props.children}
			</View>
		)
	}
}


module.exports = ViewContainer