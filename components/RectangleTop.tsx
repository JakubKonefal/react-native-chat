import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing, VisualForms } from '../styles/index';

interface RectangleTopProps {
  children?: JSX.Element;
}

const RectangleTop = ({ children }: RectangleTopProps) => (
  <View style={styles.rectangleTop}>
    <View style={styles.rectangleItems}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  rectangleTop: {
    justifyContent: 'flex-end',
    width: '100%',
    height: VisualForms.rectangleTopHeight,
    backgroundColor: Colors.rectangleBackground,
    borderBottomLeftRadius: VisualForms.cornerRadiusBig,
    borderBottomRightRadius: VisualForms.cornerRadiusBig,
    paddingHorizontal: Spacing.baseHorizontalPadding,
    paddingBottom: Spacing.baseVerticalPadding,
  },
  rectangleItems: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.rectangleBackground,
    borderBottomLeftRadius: VisualForms.cornerRadiusBig,
    borderBottomRightRadius: VisualForms.cornerRadiusBig,
  },
});

export default RectangleTop;
