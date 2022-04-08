/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  id?: string | null,
  name: string,
  url: string,
  date: string,
};

export type ModelArticleConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  name: string,
  url: string,
  date: string,
  comments?: ModelCommentConnection | null,
  users?: ModelUserLibraryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  article: Article,
  content: string,
  createdAt: string,
  updatedAt: string,
  articleCommentsId?: string | null,
};

export type ModelUserLibraryConnection = {
  __typename: "ModelUserLibraryConnection",
  items:  Array<UserLibrary | null >,
  nextToken?: string | null,
};

export type UserLibrary = {
  __typename: "UserLibrary",
  id: string,
  articleID: string,
  userID: string,
  article: Article,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  savedArticles?: ModelUserLibraryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  date?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  articleCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  articleCommentsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  articleCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserLibraryInput = {
  id?: string | null,
  articleID: string,
  userID: string,
};

export type ModelUserLibraryConditionInput = {
  articleID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserLibraryConditionInput | null > | null,
  or?: Array< ModelUserLibraryConditionInput | null > | null,
  not?: ModelUserLibraryConditionInput | null,
};

export type UpdateUserLibraryInput = {
  id: string,
  articleID?: string | null,
  userID?: string | null,
};

export type DeleteUserLibraryInput = {
  id: string,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  articleCommentsId?: ModelIDInput | null,
};

export type ModelUserLibraryFilterInput = {
  id?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserLibraryFilterInput | null > | null,
  or?: Array< ModelUserLibraryFilterInput | null > | null,
  not?: ModelUserLibraryFilterInput | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type CreateUserLibraryMutationVariables = {
  input: CreateUserLibraryInput,
  condition?: ModelUserLibraryConditionInput | null,
};

export type CreateUserLibraryMutation = {
  createUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserLibraryMutationVariables = {
  input: UpdateUserLibraryInput,
  condition?: ModelUserLibraryConditionInput | null,
};

export type UpdateUserLibraryMutation = {
  updateUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserLibraryMutationVariables = {
  input: DeleteUserLibraryInput,
  condition?: ModelUserLibraryConditionInput | null,
};

export type DeleteUserLibraryMutation = {
  deleteUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      article:  {
        __typename: "Article",
        id: string,
        name: string,
        url: string,
        date: string,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      updatedAt: string,
      articleCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserLibraryQueryVariables = {
  id: string,
};

export type GetUserLibraryQuery = {
  getUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserLibrariesQueryVariables = {
  filter?: ModelUserLibraryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLibrariesQuery = {
  listUserLibraries?:  {
    __typename: "ModelUserLibraryConnection",
    items:  Array< {
      __typename: "UserLibrary",
      id: string,
      articleID: string,
      userID: string,
      article:  {
        __typename: "Article",
        id: string,
        name: string,
        url: string,
        date: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    url: string,
    date: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        articleCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelUserLibraryConnection",
      items:  Array< {
        __typename: "UserLibrary",
        id: string,
        articleID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};

export type OnCreateUserLibrarySubscription = {
  onCreateUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserLibrarySubscription = {
  onUpdateUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserLibrarySubscription = {
  onDeleteUserLibrary?:  {
    __typename: "UserLibrary",
    id: string,
    articleID: string,
    userID: string,
    article:  {
      __typename: "Article",
      id: string,
      name: string,
      url: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      savedArticles?:  {
        __typename: "ModelUserLibraryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
