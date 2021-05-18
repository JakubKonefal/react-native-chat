import React from 'react';
import { VisualForms } from '../styles/index';
import { View, Image } from 'react-native';
import DefaultRoomPicture from '../assets/images/profile.svg';

interface SingleRoomPictureProps {
  roomPic: string | undefined;
}

const SingleRoomPicture = ({ roomPic }: SingleRoomPictureProps) =>
  roomPic ? (
    <Image
      source={{ uri: roomPic !== '' ? roomPic : undefined }}
      style={{
        width: VisualForms.roomPictureSize,
        height: VisualForms.roomPictureSize,
        borderRadius: VisualForms.rounded,
      }}
    />
  ) : (
    <View>
      <DefaultRoomPicture />
    </View>
  );

export default SingleRoomPicture;
