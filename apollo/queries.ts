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
        body
        insertedAt
        user {
          id
          profilePic
        }
      }
      name
      roomPic
      user {
        id
      }
    }
  }
`;

export const GET_ROOM_MESSAGES = gql`
  query getRoomData($roomId: String!) {
    room(id: $roomId) {
      id
      messages {
        id
        body
        insertedAt
      }
    }
  }
`;
