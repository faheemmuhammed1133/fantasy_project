// import { gql } from 'apollo-server-express';

// // Define GraphQL schema
// export const typeDefs = gql`
//   type Match {
//     _id: ID!
//     teamA: String!
//     teamB: String!
//     teamALogo: String!
//     teamBLogo: String!
//     playersA: [String!]!
//     playersB: [String!]!
//     scoreA: Int!
//     scoreB: Int!
//     sport: String!
//     date: String!
//     status: String!
//   }

//   type Query {
//     getMatchesByStatus(status: String!): [Match!]!
//   }
// `;

// export const resolvers = {
//   Query: {
//     getMatchesByStatus: async (_, { status }, { Match }) => {
//       try {
//         // Find matches by status
//         const matches = await Match.find({ status });
//         return matches;
//       } catch (error) {
//         throw new Error(error.message);
//       }
//     }
//   }
// };
