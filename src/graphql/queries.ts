/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      name
      url
      date
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          articleCommentsId
        }
        nextToken
      }
      users {
        items {
          id
          articleID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        date
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      savedArticles {
        items {
          id
          articleID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        savedArticles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      article {
        id
        name
        url
        date
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      articleCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        article {
          id
          name
          url
          date
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        articleCommentsId
      }
      nextToken
    }
  }
`;
export const getUserLibrary = /* GraphQL */ `
  query GetUserLibrary($id: ID!) {
    getUserLibrary(id: $id) {
      id
      articleID
      userID
      article {
        id
        name
        url
        date
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        savedArticles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserLibraries = /* GraphQL */ `
  query ListUserLibraries(
    $filter: ModelUserLibraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLibraries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        articleID
        userID
        article {
          id
          name
          url
          date
          createdAt
          updatedAt
        }
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
