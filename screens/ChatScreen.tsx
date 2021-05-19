import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Typography, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import RectangleBottom from '../components/RectangleBottom';
import Avatar from '../components/Avatar';
import ChatMessage from '../components/ChatMessage';
import CallIcon from '../assets/images/phone.svg';
import VideocallIcon from '../assets/images/videocall.svg';
import { useRoute } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GET_ROOM_DATA } from '../apollo/queries';
import { myUserId } from '../apollo/index';
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
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {data?.room.messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            body={msg.body}
            myMessage={msg.id === myUserId}
          />
        ))}
        <ChatMessage key={1} body={'My test message!'} myMessage={true} />
        <ChatMessage
          key={2}
          body={'My lorem ipsum longer message consisting of many characters'}
          myMessage={true}
        />
        <ChatMessage key={3} body={'Not my message again'} myMessage={false} />
      </ScrollView>
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
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    width: '100%',
    overflow: 'scroll',
    paddingLeft: Spacing.messageContainerLeftPadding,
    paddingRight: Spacing.messageContainerRightPadding,
    paddingBottom: Spacing.messageContainerBottomPadding,
  },
});
