import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing, VisualForms, Typography } from '../styles';
import SingleRoomPicture from './SingleRoomPicture';

interface SingleRoomProps {
  roomId: string;
  roomPic: string;
  name: string;
  onPress: (roomId: string) => void;
}

const SingleRoom = ({ roomId, roomPic, name, onPress }: SingleRoomProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(roomId)}>
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
    </TouchableOpacity>
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
