import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spacing, VisualForms, Typography } from '../styles';
import SingleRoomPicture from './SingleRoomPicture';

interface SingleRoomProps {
  roomPic: string;
  name: string;
}

const SingleRoom = ({ roomPic, name }: SingleRoomProps) => {
  return (
    <View style={styles.singleRoom}>
      <SingleRoomPicture roomPic={roomPic} />
      <View style={styles.textsContainer}>
        <Text style={styles.roomName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          Hey, this is last message
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleRoom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacing.roomBottomMargin,
    paddingHorizontal: Spacing.baseHorizontalPadding,
    paddingVertical: Spacing.roomVerticalPadding,
    backgroundColor: '#fff',
    borderRadius: VisualForms.cornerRadiusSmall,
  },
  textsContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: Spacing.baseHorizontalPadding,
    flexGrow: 1,
    maxWidth: '75%',
  },
  roomName: {
    fontSize: Typography.roomNameFontSize,
    fontWeight: Typography.mediumFontWeight,
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: Typography.messageFontSize,
    fontWeight: Typography.normalFontWeight,
  },
});

export default SingleRoom;
