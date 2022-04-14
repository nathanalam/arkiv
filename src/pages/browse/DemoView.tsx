import { API, graphqlOperation } from "aws-amplify";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { getArticle, getUserArticle } from "../../graphql/queries";
import { Article, UserArticle } from "../../API";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const ArticleLoading = () => {
  return <p>Loading Article...</p>;
};

const ArticleRendered = ({ url, page }: { url: string; page: number }) => {
  return (
    <div>
      <Document
        file={{ url: url.charAt(url.length - 1) === "/" ? url : url + "/" }}
      >
        <Page pageNumber={page} />
      </Document>
    </div>
  );
};

interface DemoViewProps {
  userArticleId: string;
}

const DemoView = (props: DemoViewProps) => {
  const [articleContent, setArticleContent] = useState(<ArticleLoading />);
  // get key from Storage.list;
  useEffect(() => {
    // declare the data fetching function
    const fetchPdf = async () => {
      let response;
      response = await API.graphql(
        graphqlOperation(getUserArticle, { id: props.userArticleId })
      );
      const userArticle = (response as any).data.getUserArticle as UserArticle;
      response = await API.graphql(
        graphqlOperation(getArticle, { id: userArticle.articleId })
      );
      const article = (response as any).data.getArticle as Article;
      setArticleContent(
        <ArticleRendered url={article.url} page={userArticle.page} />
      );
    };

    // call the function
    fetchPdf()
      // make sure to catch any errorg
      .catch(console.error);
  }, [props.userArticleId]);
  return <div>{articleContent}</div>;
};

export default DemoView;
