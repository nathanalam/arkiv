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
