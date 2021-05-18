import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography, VisualForms } from '../styles/index';
import RectangleTop from '../components/RectangleTop';
import SearchIcon from '../assets/images/search.svg';
import RoomsIcon from '../assets/images/rooms.svg';
import { useQuery } from '@apollo/client';
import { GET_USER_ROOMS } from '../apollo/queries';

interface User {
  id: string;
}

interface DataInterface {
  usersRooms: {
    rooms: User[];
    user: {
      id: string;
    };
  };
}

export default function RoomsScreen() {
  const { data, loading } = useQuery<DataInterface, boolean>(GET_USER_ROOMS);

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
      <Text>{data?.usersRooms?.user?.id}</Text>
      <Text>{data?.usersRooms?.rooms[0].id}</Text>
      <Text>{data?.usersRooms?.rooms[1].id}</Text>
      <Text>{data?.usersRooms?.rooms[2].id}</Text>
      <Text>Data properly fetched!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
