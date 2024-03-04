const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    githubUsername: String!
    savedIssues: [Issue]
  }

  type Issue {
    _id: ID
    issueId: String
    title: String
    description: String
    state: String
    bounty: Float
    voters: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(userId: ID!): User
    users: [User]
    issues: [Issue]
    issue(issueId: ID!): Issue
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, githubUsername: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveIssue(issueId: String!, title: String!, description: String!, state: String!, bounty: Float): Issue
    removeIssue(issueId: String!): User
    addVote(issueId: ID!): Issue
    removeVote(issueId: ID!): Issue
    addBounty(issueId: ID!, bountyDollars: Float!): Issue
  }
`;

module.exports = typeDefs;
