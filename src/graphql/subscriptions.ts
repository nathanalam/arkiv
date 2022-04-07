/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUserLibrary = /* GraphQL */ `
  subscription OnCreateUserLibrary {
    onCreateUserLibrary {
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
export const onUpdateUserLibrary = /* GraphQL */ `
  subscription OnUpdateUserLibrary {
    onUpdateUserLibrary {
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
export const onDeleteUserLibrary = /* GraphQL */ `
  subscription OnDeleteUserLibrary {
    onDeleteUserLibrary {
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
export const onCreateSubjectCatalog = /* GraphQL */ `
  subscription OnCreateSubjectCatalog {
    onCreateSubjectCatalog {
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
export const onUpdateSubjectCatalog = /* GraphQL */ `
  subscription OnUpdateSubjectCatalog {
    onUpdateSubjectCatalog {
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
export const onDeleteSubjectCatalog = /* GraphQL */ `
  subscription OnDeleteSubjectCatalog {
    onDeleteSubjectCatalog {
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
