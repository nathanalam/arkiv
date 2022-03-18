import { Amplify, API, graphqlOperation } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Component, useState } from 'react';
import { createArticle, deleteArticle } from './graphql/mutations';
import { listArticles } from './graphql/queries';

import uuid from 'react-uuid'

import awsExports from './aws-exports';

Amplify.configure(awsExports);

type Article = {
  id: string
  name: string
  arxivUrl: string
  date: string
  comments: string[]
  subject: string
};

const AddArticle = ({addArticle}: {addArticle: (newArticle: Article) => void}) => {
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [arxivUrl, setArxivUrl] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={({target}) => setName(target.value)}
        placeholder="Article name"
      />
      <input
        value={date}
        onChange={({target}) => setDate(target.value)}
        placeholder="Date"
      />
      <input
        value={arxivUrl}
        onChange={({target}) => setArxivUrl(target.value)}
        placeholder="Arxiv link"
      />
      <input
        value={subject}
        onChange={({target}) => setSubject(target.value)}
        placeholder="Subject"
      />
      <button onClick={() => addArticle({
        id: uuid(),
        name,
        arxivUrl,
        date,
        comments: [],
        subject
      })}>Add Article</button>
    </div>
  );
}


const ArticleList = ({articleList, deleteArticle}: {articleList: Article[], deleteArticle: (article: Article) => void}) => {
  return (
    <div>
      {articleList.map(article =>
        <div key={article.id}>
          <a href={article.arxivUrl}>{article.arxivUrl}</a>
          <button onClick={() => { deleteArticle(article) }}>x</button>
        </div>
      )}
    </div>
  );
}

const ArticleViewer = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const deleteArticle = async (article: Article) => {
    const id = {
      id: article.id
    };
    await API.graphql(graphqlOperation(deleteArticle, { input: id }));
    setArticles(articles.filter(a => a.id !== article.id))
  }

  const addArticle = async (article: Article) => {
    const result: any = await API.graphql(graphqlOperation(createArticle, { input: article }));
    articles.push(result);
    setArticles(articles);
  }

  return <div>
    <AddArticle 
      addArticle={addArticle}
    />
    <ArticleList 
      articleList={articles}
      deleteArticle={deleteArticle}
    />
  </div>
}

function App({ signOut, user }: any) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <ArticleViewer />
    </>
  );
}

export default withAuthenticator(App);