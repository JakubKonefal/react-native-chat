import { gql } from '@apollo/client';

// export const GET_USER_DATA = gql`
//   query getUserData {
//     user {
//       id
//       email
//       role
//       profilePic
//       firstName
//     }
//   }
// `;

export const GET_USER_ROOMS = gql`
  query getUserRooms {
    usersRooms {
      rooms {
        id
        name
        roomPic
      }
      user {
        id
      }
    }
  }
`;

export const GET_ROOM_DATA = gql`
  query getRoomData($roomId: String!) {
    room(id: $roomId) {
      id
      messages {
        id
      }
      name
      roomPic
      user {
        id
      }
    }
  }
`;
