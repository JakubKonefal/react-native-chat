import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SendIcon from '../assets/images/send.svg';
import { Colors, Spacing, VisualForms } from '../styles/index';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../apollo/queries';

interface RectangleBottomProps {
  roomId: string;
}

const RectangleBottom = ({ roomId }: RectangleBottomProps) => {
  const [message, setMessage] = useState('');

  const [sendMessage, { data }] = useMutation(SEND_MESSAGE);

  return (
    <View style={styles.rectangleBottom}>
      <TextInput
        style={styles.textInput}
        onChangeText={(message) => setMessage(message)}
        defaultValue={message}
        value={message}
      />
      <TouchableOpacity
        onPress={() => {
          sendMessage({
            variables: {
              body: message,
              roomId: roomId,
            },
          });
        }}
      >
        <View style={styles.sendIconContainer}>
          <SendIcon />
        </View>
      </TouchableOpacity>
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
    maxWidth: 280,
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
