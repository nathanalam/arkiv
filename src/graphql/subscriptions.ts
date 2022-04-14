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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserArticle = /* GraphQL */ `
  subscription OnCreateUserArticle {
    onCreateUserArticle {
      articleId
      userId
      page
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserArticle = /* GraphQL */ `
  subscription OnUpdateUserArticle {
    onUpdateUserArticle {
      articleId
      userId
      page
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserArticle = /* GraphQL */ `
  subscription OnDeleteUserArticle {
    onDeleteUserArticle {
      articleId
      userId
      page
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      articleId
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      articleId
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      articleId
      content
      createdAt
      updatedAt
    }
  }
`;
