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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
