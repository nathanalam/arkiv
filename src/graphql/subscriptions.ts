/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUserLibrary = /* GraphQL */ `
  subscription OnCreateUserLibrary {
    onCreateUserLibrary {
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
export const onUpdateUserLibrary = /* GraphQL */ `
  subscription OnUpdateUserLibrary {
    onUpdateUserLibrary {
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
export const onDeleteUserLibrary = /* GraphQL */ `
  subscription OnDeleteUserLibrary {
    onDeleteUserLibrary {
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
