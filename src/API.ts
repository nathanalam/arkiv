/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  id?: string | null,
  name: string,
  arxivUrl: string,
  date: string,
  userSavedArticlesId?: string | null,
  subjectArticlesId?: string | null,
};

export type ModelArticleConditionInput = {
  name?: ModelStringInput | null,
  arxivUrl?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
  userSavedArticlesId?: ModelIDInput | null,
  subjectArticlesId?: ModelIDInput | null,
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

export type Article = {
  __typename: "Article",
  id: string,
  name: string,
  arxivUrl: string,
  date: string,
  comments?: ModelCommentConnection | null,
  subject: Subject,
  createdAt: string,
  updatedAt: string,
  userSavedArticlesId?: string | null,
  subjectArticlesId?: string | null,
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

export type Subject = {
  __typename: "Subject",
  id: string,
  title: string,
  articles?: ModelArticleConnection | null,
  createdAt: string,
  updatedAt: string,
  userSubscribedSubjectsId?: string | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type UpdateArticleInput = {
  id: string,
  name?: string | null,
  arxivUrl?: string | null,
  date?: string | null,
  userSavedArticlesId?: string | null,
  subjectArticlesId?: string | null,
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

export type User = {
  __typename: "User",
  id: string,
  name: string,
  savedArticles?: ModelArticleConnection | null,
  subscribedSubjects?: ModelSubjectConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  title: string,
  userSubscribedSubjectsId?: string | null,
};

export type ModelSubjectConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  userSubscribedSubjectsId?: ModelIDInput | null,
};

export type UpdateSubjectInput = {
  id: string,
  title?: string | null,
  userSubscribedSubjectsId?: string | null,
};

export type DeleteSubjectInput = {
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

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  articleCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  arxivUrl?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
  userSavedArticlesId?: ModelIDInput | null,
  subjectArticlesId?: ModelIDInput | null,
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

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
  userSubscribedSubjectsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  articleCommentsId?: ModelIDInput | null,
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
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
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
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
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
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
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
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
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
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      subscribedSubjects?:  {
        __typename: "ModelSubjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      },
      content: string,
      createdAt: string,
      updatedAt: string,
      articleCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    name: string,
    arxivUrl: string,
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
    subject:  {
      __typename: "Subject",
      id: string,
      title: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSubscribedSubjectsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userSavedArticlesId?: string | null,
    subjectArticlesId?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    savedArticles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
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
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subscribedSubjects?:  {
      __typename: "ModelSubjectConnection",
      items:  Array< {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
  } | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
  } | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    title: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        name: string,
        arxivUrl: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        userSavedArticlesId?: string | null,
        subjectArticlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSubscribedSubjectsId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
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
      arxivUrl: string,
      date: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      subject:  {
        __typename: "Subject",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userSubscribedSubjectsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userSavedArticlesId?: string | null,
      subjectArticlesId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    articleCommentsId?: string | null,
  } | null,
};
