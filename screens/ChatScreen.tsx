import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Spacing, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import RectangleBottom from '../components/RectangleBottom';
import CallIcon from '../assets/images/phone.svg';
import VideocallIcon from '../assets/images/videocall.svg';

export default function TabTwoScreen() {
  return (
    <View style={styles.screenContainer}>
      <RectangleTop>
        <>
          <View style={styles.chatInfo}></View>
          <View style={styles.callIconContainer}>
            <CallIcon />
          </View>
          <VideocallIcon />
        </>
      </RectangleTop>
      <RectangleBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.screenBackground,
    height: '100%',
  },
  chatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    height: 50,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: '#83c',
  },
  callIconContainer: {
    marginLeft: 'auto',
    marginRight: Spacing.iconsMargin,
    borderRadius: VisualForms.rounded,
  },
});
