// index.js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let Users = [
  { id: 1, name: "Rishabh", email: "rishabh@example.com", phone: "9654321098" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "9876543210" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "1122334455" }
];

let Posts = [
  { id: 1, title: "Hello World", body: "This is the first post.", userId: 1 },
  { id: 2, title: "GraphQL Rocks", body: "Learning GraphQL is fun!", userId: 2 },
];

const typeDefs = `#graphql
  type User {
    id: ID
    name: String
    email: String
    phone: String
  }

  type Post {
    id: ID
    title: String
    body: String
    userId: ID
    user: User
  }

  type Query {
    # User queries
    Users: [User]
    User(id: ID!): User

    # Post queries
    Posts: [Post]
    Post(id: ID!): Post
  }

  type Mutation {
    # User mutations
    addUser(id: ID!, name: String!, email: String!, phone: String!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String, email: String, phone: String): User

    # Post mutations
    addPost(id: ID!, title: String!, body: String!, userId: ID!): Post
    updatePost(id: ID!, title: String, body: String, userId: ID): Post
    deletePost(id: ID!): Post
  }
`;

const resolvers = {
  Query: {
    // User resolvers
    Users: () => Users,
    User: (_, args) => Users.find((u) => u.id == args.id),

    // Post resolvers
    Posts: () => Posts,
    Post: (_, args) => Posts.find((p) => p.id == args.id),
  },

  Post: {
    // Resolve the nested `user` field on a Post
    user: (parent) => Users.find((u) => u.id == parent.userId),
  },

  Mutation: {
    // User mutations
    addUser: (_, args) => {
      const newUser = {
        id: args.id,
        name: args.name,
        email: args.email,
        phone: args.phone,
      };
      Users.push(newUser);
      return newUser;
    },
    deleteUser: (_, args) => {
      const index = Users.findIndex((u) => u.id == args.id);
      if (index === -1) return null;
      const deletedUser = Users[index];
      Users.splice(index, 1);
      return deletedUser;
    },
    updateUser: (_, args) => {
      const user = Users.find((u) => u.id == args.id);
      if (!user) return null;
      if (args.name !== undefined) user.name = args.name;
      if (args.email !== undefined) user.email = args.email;
      if (args.phone !== undefined) user.phone = args.phone;
      return user;
    },

    // Post mutations
    addPost: (_, args) => {
      const newPost = {
        id: args.id,
        title: args.title,
        body: args.body,
        userId: args.userId,
      };
      Posts.push(newPost);
      return newPost;
    },
    updatePost: (_, args) => {
      const post = Posts.find((p) => p.id == args.id);
      if (!post) return null;
      if (args.title !== undefined) post.title = args.title;
      if (args.body !== undefined) post.body = args.body;
      if (args.userId !== undefined) post.userId = args.userId;
      return post;
    },
    deletePost: (_, args) => {
      const index = Posts.findIndex((p) => p.id == args.id);
      if (index === -1) return null;
      const deletedPost = Posts[index];
      Posts.splice(index, 1);
      return deletedPost;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4003 },
});

console.log(`🚀 Server ready at: ${url}`);