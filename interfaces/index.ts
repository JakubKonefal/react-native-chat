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

export interface MessageType {
  id: string;
  body: string;
  insertedAt: string;
  user: UserType;
}

export interface RoomDataType {
  room: {
    id: string;
    messages: MessageType[];
    name: string;
    roomPic: string;
    user: UserType;
  };
}

export interface RoomMessagesType {
  room: {
    id: string;
    messages: MessageType[];
  };
}
