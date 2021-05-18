import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Spacing, VisualForms } from '../styles';
import SingleRoomPicture from './SingleRoomPicture';

interface SingleRoomProps {
  roomPic: string;
  name: string;
}

const SingleRoom = ({ roomPic, name }: SingleRoomProps) => {
  return (
    <View style={styles.singleRoom}>
      <SingleRoomPicture roomPic={roomPic} />
      <Text> {name} </Text>
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
});

export default SingleRoom;
