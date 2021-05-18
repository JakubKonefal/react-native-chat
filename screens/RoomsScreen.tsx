import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import SearchIcon from '../assets/images/search.svg';
import RoomsIcon from '../assets/images/rooms.svg';
import SingleRoom from '../components/SingleRoom';
import { useQuery } from '@apollo/client';
import { GET_USER_ROOMS } from '../apollo/queries';
import { UserRoomsType } from '../interfaces/index';
import { useNavigation } from '@react-navigation/core';

export default function RoomsScreen() {
  const navigation = useNavigation();
  const { data, loading } = useQuery<UserRoomsType, boolean>(GET_USER_ROOMS);

  if (loading) return <Text>Loading...</Text>;

  const onPress = (roomId: string) => {
    navigation.navigate('Chat', {
      roomId,
    });
  };

  return (
    <View style={styles.screenContainer}>
      <RectangleTop>
        <>
          <Text style={styles.roomLabel}> Rooms </Text>
          <View style={styles.searchIconContainer}>
            <SearchIcon />
          </View>
          <RoomsIcon />
        </>
      </RectangleTop>
      <View style={styles.roomsContainer}>
        {data?.usersRooms.rooms.map((room) => (
          <SingleRoom
            key={room.id}
            roomId={room.id}
            roomPic={room.roomPic}
            name={room.name}
            onPress={onPress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
  },
  roomLabel: {
    fontSize: Typography.headingFontSize,
    color: Typography.headingColor,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    marginLeft: 'auto',
    marginRight: Spacing.iconsMargin,
    borderRadius: VisualForms.rounded,
  },
  roomsContainer: {
    width: '100%',
    paddingTop: 24,
  },
});
