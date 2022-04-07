/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      name
      arxivUrl
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
      subject {
        id
        title
        articles {
          nextToken
        }
        subscribers {
          nextToken
        }
        createdAt
        updatedAt
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
      subjectArticlesId
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
        arxivUrl
        date
        comments {
          nextToken
        }
        subject {
          id
          title
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        subjectArticlesId
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
      subscribedSubjects {
        items {
          id
          userID
          subjectID
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
        subscribedSubjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      title
      articles {
        items {
          id
          name
          arxivUrl
          date
          createdAt
          updatedAt
          subjectArticlesId
        }
        nextToken
      }
      subscribers {
        items {
          id
          userID
          subjectID
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        articles {
          nextToken
        }
        subscribers {
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
        arxivUrl
        date
        comments {
          nextToken
        }
        subject {
          id
          title
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        subjectArticlesId
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
          arxivUrl
          date
          createdAt
          updatedAt
          subjectArticlesId
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
        arxivUrl
        date
        comments {
          nextToken
        }
        subject {
          id
          title
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        subjectArticlesId
      }
      user {
        id
        name
        savedArticles {
          nextToken
        }
        subscribedSubjects {
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
          arxivUrl
          date
          createdAt
          updatedAt
          subjectArticlesId
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
export const getSubjectCatalog = /* GraphQL */ `
  query GetSubjectCatalog($id: ID!) {
    getSubjectCatalog(id: $id) {
      id
      userID
      subjectID
      user {
        id
        name
        savedArticles {
          nextToken
        }
        subscribedSubjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      subject {
        id
        title
        articles {
          nextToken
        }
        subscribers {
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
export const listSubjectCatalogs = /* GraphQL */ `
  query ListSubjectCatalogs(
    $filter: ModelSubjectCatalogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjectCatalogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        subjectID
        user {
          id
          name
          createdAt
          updatedAt
        }
        subject {
          id
          title
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
