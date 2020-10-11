const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Url{
        _id : ID!
        ownerid : ID!
        longurl : String!
        shorturl : String!
        expirydate : String!
        createdAt : String!
        readwriteaccess : Access!
        clicks : [Click!]
    }
    type User{
        _id : ID!
        name : String!
        email : String!
        password : String!
        createdAt : String!
        updatedAt : String!
        urls : [Url!]
    }

    type Click{
        email : String!
        clickedAt : String!
        location : String!
    }
    type Access{
        email : String!
        permissions : [String!]!
    }
    type AuthToken{
        token : String!
    }
    type GenericMessage{
        message: String!
    }
    input UserInputData{
        name : String!
        email : String!
        password : String!
    }
    input PostInputData{
        longurl : String!
    }
    type PostData{
        urls : [Url!]!
        totalurls : Int!
    }
    type RootQuery{
        login(email : String! , password : String!) : AuthToken!
        urls : PostData!
    }
    type RootMutation{
        signUp(UserInput : UserInputData) : GenericMessage!
        createUrl(postInput : PostInputData) : Url!
    }
    schema {
        query : RootQuery
        mutation : RootMutation
    }`);
