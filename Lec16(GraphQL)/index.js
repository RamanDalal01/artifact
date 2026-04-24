import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let users = [
  { name: "raman", email: "raman@gamil.com", phone: 833639 },
  { name: "momo", email: "momo@gmail.com", phone: 98765432 },
  { name: "vasu", email: "vasu@gmail.com", phone: 167890 }
];

const typeDefs = `
type User {
  name: String
  email: String
  phone: Int
}

type Query {
  users: [User]
  user: User
}
`;

const resolvers = {
  Query: {
    users: () => users,
    user: () => users[0]
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at http://localhost:4000/`);