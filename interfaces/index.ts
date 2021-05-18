export interface SingleRoomType {
  id: string;
  name: string;
  roomPic: string;
}

export interface UserType {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  name: string;
  profilePic: string;
  role: string;
}

export interface UserRoomsType {
  usersRooms: {
    rooms: SingleRoomType[];
    user: UserType;
  };
}
