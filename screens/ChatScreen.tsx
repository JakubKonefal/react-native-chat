import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import RectangleBottom from '../components/RectangleBottom';
import Avatar from '../components/Avatar';
import CallIcon from '../assets/images/phone.svg';
import VideocallIcon from '../assets/images/videocall.svg';
import { useRoute } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GET_ROOM_DATA } from '../apollo/queries';
import { RoomDataType } from '../interfaces';

type ParamList = {
  Chat: {
    roomId: string;
  };
};

export default function ChatScreen() {
  const route = useRoute<RouteProp<ParamList, 'Chat'>>();

  const { data, loading } = useQuery<RoomDataType>(GET_ROOM_DATA, {
    variables: {
      roomId: route.params.roomId,
    },
  });

  if (loading) return <Text>Loading...</Text>;

  console.log(data);

  return (
    <View style={styles.screenContainer}>
      <RectangleTop>
        <>
          <View style={styles.chatInfo}>
            <Avatar
              avatar={data?.room.messages[0].user.profilePic}
              size="medium"
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {`${data?.room.messages[0].user.firstName} ${data?.room.messages[0].user.lastName}`}
              </Text>
              <Text style={styles.userStatus}>Activity status unknown</Text>
            </View>
          </View>
          <View style={styles.callIconContainer}>
            <CallIcon />
          </View>
          <VideocallIcon />
        </>
      </RectangleTop>
      <RectangleBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.screenBackground,
    height: '100%',
  },
  chatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    marginRight: 15,
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    alignSelf: 'flex-start',
    fontSize: Typography.roomNameFontSize,
    fontWeight: Typography.boldFontWeight,
    color: Colors.headingColor,
  },
  userStatus: {
    marginTop: 4,
    color: '#fff',
    fontSize: 14,
  },
  callIconContainer: {
    marginLeft: 'auto',
    marginRight: Spacing.iconsMargin,
    borderRadius: VisualForms.rounded,
  },
});
