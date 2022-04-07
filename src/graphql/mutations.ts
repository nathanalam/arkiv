/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUserLibrary = /* GraphQL */ `
  mutation CreateUserLibrary(
    $input: CreateUserLibraryInput!
    $condition: ModelUserLibraryConditionInput
  ) {
    createUserLibrary(input: $input, condition: $condition) {
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
export const updateUserLibrary = /* GraphQL */ `
  mutation UpdateUserLibrary(
    $input: UpdateUserLibraryInput!
    $condition: ModelUserLibraryConditionInput
  ) {
    updateUserLibrary(input: $input, condition: $condition) {
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
export const deleteUserLibrary = /* GraphQL */ `
  mutation DeleteUserLibrary(
    $input: DeleteUserLibraryInput!
    $condition: ModelUserLibraryConditionInput
  ) {
    deleteUserLibrary(input: $input, condition: $condition) {
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
export const createSubjectCatalog = /* GraphQL */ `
  mutation CreateSubjectCatalog(
    $input: CreateSubjectCatalogInput!
    $condition: ModelSubjectCatalogConditionInput
  ) {
    createSubjectCatalog(input: $input, condition: $condition) {
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
export const updateSubjectCatalog = /* GraphQL */ `
  mutation UpdateSubjectCatalog(
    $input: UpdateSubjectCatalogInput!
    $condition: ModelSubjectCatalogConditionInput
  ) {
    updateSubjectCatalog(input: $input, condition: $condition) {
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
export const deleteSubjectCatalog = /* GraphQL */ `
  mutation DeleteSubjectCatalog(
    $input: DeleteSubjectCatalogInput!
    $condition: ModelSubjectCatalogConditionInput
  ) {
    deleteSubjectCatalog(input: $input, condition: $condition) {
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
