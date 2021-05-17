import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SendIcon from '../assets/images/send.svg';
import { Colors, Spacing, VisualForms } from '../styles/index';

const RectangleBottom = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.rectangleBottom}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        value={text}
      />
      <View style={styles.sendIconContainer}>
        <SendIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: VisualForms.rectangleBottomHeight,
    marginTop: 'auto',
    paddingHorizontal: Spacing.baseHorizontalPadding,
    backgroundColor: Colors.rectangleBackground,
    borderTopLeftRadius: VisualForms.cornerRadiusSmall,
    borderTopRightRadius: VisualForms.cornerRadiusSmall,
  },
  textInput: {
    flexGrow: 1,
    height: VisualForms.inputHeight,
    padding: Spacing.inputPadding,
    backgroundColor: '#fff',
    borderBottomLeftRadius: VisualForms.cornerRadiusSmall,
    borderTopLeftRadius: VisualForms.cornerRadiusSmall,
    borderTopRightRadius: VisualForms.cornerRadiusSmall,
  },
  sendIconContainer: {
    marginLeft: 17,
  },
});

export default RectangleBottom;
