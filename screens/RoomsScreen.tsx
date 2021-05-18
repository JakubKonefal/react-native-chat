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

export default function RoomsScreen() {
  const { data, loading } = useQuery<UserRoomsType, boolean>(GET_USER_ROOMS);

  if (loading) return <Text>Loading...</Text>;

  console.log(data);

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
          <SingleRoom key={room.id} roomPic={room.roomPic} name={room.name} />
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
