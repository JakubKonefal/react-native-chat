import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing, VisualForms, Typography } from '../styles';
import SingleRoomPicture from './SingleRoomPicture';
import { MessageType } from '../interfaces/index';
import moment from 'moment';

interface SingleRoomProps {
  roomId: string | undefined;
  roomPic: string | undefined;
  name: string | undefined;
  latestMessage: MessageType | undefined;
  onPress: (roomId: string | undefined) => void;
}

const SingleRoom = ({
  roomId,
  roomPic,
  name,
  latestMessage,
  onPress,
}: SingleRoomProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(roomId)}>
      <View style={styles.singleRoom}>
        <SingleRoomPicture roomPic={roomPic} />
        <View style={styles.textsContainer}>
          <Text style={styles.roomName} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {latestMessage?.body}
          </Text>
        </View>
        <Text style={styles.lastActive}>
          {moment(latestMessage?.insertedAt).startOf('minutes').fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singleRoom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
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
  lastActive: {
    position: 'absolute',
    top: 8,
    right: 16,
    fontSize: Typography.lastActiveFontSize,
    color: Typography.lastActiveColor,
  },
});

export default SingleRoom;
