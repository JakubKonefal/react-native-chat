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
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function RoomsScreen() {
  const { data, loading } = useQuery<UserRoomsType, boolean>(GET_USER_ROOMS);

  const [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
  });

  if (loading) return <Text>Loading...</Text>;

  if (data) {
    const roomsIds = data.usersRooms.rooms.map((room) => room.id);

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
          {roomsIds.map((roomId) => {
            return <SingleRoom key={roomId} roomId={roomId} />;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
  },
  roomLabel: {
    fontFamily: 'Poppins_700Bold',
    fontSize: Typography.headingFontSize,
    color: Colors.headingColor,
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
