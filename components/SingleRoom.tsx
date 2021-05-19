import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing, VisualForms, Typography, Colors } from '../styles';
import Avatar from './Avatar';
import moment from 'moment';
import { useNavigation } from '@react-navigation/core';
import { useQuery } from '@apollo/client';
import { GET_ROOM_DATA } from '../apollo/queries';
import { RoomDataType } from '../interfaces/index';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

interface SingleRoomProps {
  roomId: string | undefined;
}

const SingleRoom = ({ roomId }: SingleRoomProps) => {
  const [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
  });

  const navigation = useNavigation();
  const { data, loading } = useQuery<RoomDataType>(GET_ROOM_DATA, {
    variables: {
      roomId,
    },
  });

  const onPress = (roomId: string | undefined) => {
    navigation.navigate('Chat', {
      roomId,
    });
  };

  let latestMessage;

  if (data) {
    latestMessage = [...data!.room.messages].pop();
  }

  if (loading) return <Text>Loading...</Text>;

  return (
    <TouchableOpacity onPress={() => onPress(roomId)}>
      <View style={styles.singleRoom}>
        <Avatar avatar={data?.room.roomPic} size="big" />
        <View style={styles.textsContainer}>
          <Text style={styles.roomName} numberOfLines={1}>
            {data?.room.name}
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
    fontFamily: 'Poppins_500Medium',
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
    color: Colors.lastActiveColor,
  },
});

export default SingleRoom;
