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
        createdAt
        updatedAt
        userSubscribedSubjectsId
      }
      createdAt
      updatedAt
      userSavedArticlesId
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
          userSubscribedSubjectsId
        }
        createdAt
        updatedAt
        userSavedArticlesId
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
          name
          arxivUrl
          date
          createdAt
          updatedAt
          userSavedArticlesId
          subjectArticlesId
        }
        nextToken
      }
      subscribedSubjects {
        items {
          id
          title
          createdAt
          updatedAt
          userSubscribedSubjectsId
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
          userSavedArticlesId
          subjectArticlesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSubscribedSubjectsId
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
        createdAt
        updatedAt
        userSubscribedSubjectsId
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
          userSubscribedSubjectsId
        }
        createdAt
        updatedAt
        userSavedArticlesId
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
          userSavedArticlesId
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
