import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import SearchIcon from '../assets/images/search.svg';
import RoomsIcon from '../assets/images/rooms.svg';

export default function RoomsScreen() {
  return (
    <View style={styles.screenContainer}>
      <RectangleTop>
        <>
          <Text style={styles.roomLabel}> Rooms </Text>
          <View style={styles.searchIconContainer}>
            <SearchIcon />
          </View>
          <RoomsIcon />
        </>
      </RectangleTop>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.screenBackground,
  },
  roomLabel: {
    fontSize: Typography.headingFontSize,
    color: Typography.headingColor,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    marginLeft: 'auto',
    marginRight: Spacing.iconsMargin,
    borderRadius: VisualForms.rounded,
  },
});
