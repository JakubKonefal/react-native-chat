import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, VisualForms } from '../styles/index';

interface ChatMessageProps {
  body: string;
  myMessage: boolean;
}

const ChatMessage = ({ body, myMessage }: ChatMessageProps) => {
  console.log(myMessage);

  return (
    <View
      style={[
        styles.message,
        myMessage ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={myMessage ? styles.myMessageText : styles.otherMessageText}>
        {body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    marginVertical: Spacing.messageVerticalMargin,
    padding: Spacing.messagePadding,
    borderTopLeftRadius: VisualForms.cornerRadiusSmall,
    borderTopRightRadius: VisualForms.cornerRadiusSmall,
  },
  myMessage: {
    marginLeft: Spacing.messageSideMargin,
    backgroundColor: Colors.myMessageBackgroundColor,
    color: '#fff',
    borderBottomLeftRadius: VisualForms.cornerRadiusSmall,
  },
  myMessageText: {
    color: '#fff',
  },
  otherMessage: {
    marginRight: Spacing.messageSideMargin,
    backgroundColor: Colors.otherMessageBackgroundColor,
    borderBottomRightRadius: VisualForms.cornerRadiusSmall,
  },
  otherMessageText: {
    color: '#000',
  },
});

export default ChatMessage;
